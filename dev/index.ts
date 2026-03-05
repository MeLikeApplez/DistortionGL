import chalk from 'chalk'

import fs, {   promises as fsPromise, ftruncate } from 'fs'
import path from 'path'

import * as esbuild from 'esbuild'
import { glob } from 'glob'

import { rollup } from 'rollup'
import { dts } from 'rollup-plugin-dts'

import dtsmd from '@suchipi/dtsmd' 

const ENTRY_PATH = '../src/**/*.ts'

const ENTRY_BARREL_DIR = '../src'
const ENTRY_BARREL_FILE = 'index.ts'
const ENTRY_BARREL_PATH = path.join(ENTRY_BARREL_DIR, ENTRY_BARREL_FILE)

const ENTRY_BARREL_IGNORE = new Set([ENTRY_BARREL_FILE, '__test__.ts'])

const ENTRY_PATH_GLOB = await glob(ENTRY_PATH, {
    posix: true
})
const OUTPUT_PATH_JS = '../build/js'
const OUTPUT_JS = '../build/index.js'
const OUTPUT_MINIFIED_JS = '../build/index-minified.js'

const DOCS_PATH = '../docs'
const DOCS_INDEX_PATH = path.join(DOCS_PATH, './index.md')
const DOCS_REFERENCE_PATH = path.join(DOCS_PATH, './reference')
const DOCS_TEMP_DIR = path.join(DOCS_PATH, './temp')

async function createBarrelFile(barrelDirectory: string, barrelFilepath: string, globs: string[]) {
    await fsPromise.writeFile(path.join(barrelDirectory, barrelFilepath), '')
    
    for(let i = 0; i < globs.length; i++) {
        const filepath = globs[i] as string
        
        if(ENTRY_BARREL_IGNORE.has(path.basename(filepath))) {
            continue
        }

        const srcFile = path.posix.relative(barrelDirectory, filepath).replace(/\.\w+/g, '')
        const exportString = `export * from "./${srcFile}"\n`

        console.log(
            chalk.green(srcFile)
        )

        fsPromise.appendFile(path.join(barrelDirectory, barrelFilepath), exportString)
    }
}

async function createMarkdownDocs(tempDirectory: string, globs: string[]) {
    if(!fs.existsSync(tempDirectory)) {
        await fsPromise.rmdir(tempDirectory)
        await fsPromise.mkdir(tempDirectory)
    }

    if(!fs.existsSync(DOCS_INDEX_PATH)) {
        await fsPromise.rmdir(DOCS_INDEX_PATH)
        await fsPromise.mkdir(DOCS_INDEX_PATH)
    }

    interface RollupDTSOutput {
        file: string
        format: 'es'
    }

    const rollupQueue = []
    const dtsOutputs: RollupDTSOutput[] = []

    console.log(
        chalk.yellowBright('Setting up rollup dts...')
    )

    for(let i = 0; i < globs.length; i++) {
        const globFilepath = globs[i] as string

        if(ENTRY_BARREL_IGNORE.has(path.basename(globFilepath))) {
            continue
        }

        const dtsFilename = path.basename(globFilepath).replace(/\.\w+/g, '') + '.d.ts'
        const dtsFilepath = path.join(tempDirectory, dtsFilename)

        rollupQueue.push(
            rollup({
                input: globFilepath,
                plugins: [dts()]
            })
        )

        dtsOutputs.push({
            file: dtsFilepath,
            format: 'es'
        })
    }

    const rollupBundles = await Promise.allSettled(rollupQueue)

    console.log(
        chalk.blueBright('Creating reference markdown...')
    )

    for(let i = 0; i < rollupBundles.length; i++) {
        const bundle = rollupBundles[i]!
        const output = dtsOutputs[i] as RollupDTSOutput

        if(bundle.status === 'rejected') {
            console.error('Failed to bundle a markdown file!', bundle.reason)
        
            continue
        }

        bundle.value.write(output)
        
        console.log(
            chalk.magentaBright(output.file)
        )

        const dtsFilename = path.basename(output.file).replace(/\.\w+/g, '') + '.md'
        const referenceFilepath = path.join(DOCS_REFERENCE_PATH, dtsFilename)

        fsPromise.readFile(output.file, 'utf-8').then(code => {
            dtsmd.processSource(code).then(md => {
                fsPromise.appendFile(referenceFilepath, md.markdown, 'utf-8')
            })
        })
    }

    // await rollup({
    //     input: globs,
    //     output: dtsFilesOutput,
    //     plugins: [dts()] 
    // })
}

// Do not ask why I am using esbuild and rollup at the same time
// I am very aware I can use one only and produce the same build output
async function buildProject() {
    console.log(chalk.yellowBright('Building javascript with esbuild...'))
    await createBarrelFile(ENTRY_BARREL_DIR, ENTRY_BARREL_FILE, ENTRY_PATH_GLOB)

    console.log(chalk.yellowBright('Building markdown docs...'))
    await createMarkdownDocs(DOCS_TEMP_DIR, ENTRY_PATH_GLOB)

    /*
    await esbuild.build({
        entryPoints: [ENTRY_BARREL_PATH],
        format: 'esm',
        outfile: OUTPUT_MINIFIED_JS,
        bundle: true,
        treeShaking: false,
        minify: true,
    })
    */

    await esbuild.build({
        entryPoints: [ENTRY_BARREL_PATH],
        format: 'esm',
        outfile: OUTPUT_JS,
        bundle: true,
        minifyWhitespace: true,
        minifySyntax: true,
        treeShaking: false,
    })

    console.log(chalk.blueBright('Running rollup for type annotations...'))

    const rollupOutput = await rollup({
        input: '../src/index.ts',
        plugins: [dts()] 
    })

    await rollupOutput.write({
        file: '../build/index.d.ts',
        format: 'es'
    })

    /*
    await esbuild.build({
        entryPoints: [ENTRY_PATH],
        format: 'esm',
        outdir: OUTPUT_PATH_JS,
    })
    */
}

async function main() {
    try {
        console.clear()
        await buildProject()

    } catch(error: any) {
        console.error(chalk.redBright(error))
    }
}

main()