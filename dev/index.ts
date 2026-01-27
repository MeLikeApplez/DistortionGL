import chalk from 'chalk'

import { promises as fsPromise } from 'fs'
import path from 'path'

import * as esbuild from 'esbuild'
import { glob } from 'glob'

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

// Do not ask why I am using esbuild and rollup at the same time
// I am very aware I can use one only and produce the same build output
async function useEsBuild() {
    console.log(chalk.yellowBright('Building javascript with esbuild...'))

    await createBarrelFile(ENTRY_BARREL_DIR, ENTRY_BARREL_FILE, ENTRY_PATH_GLOB)

    await esbuild.build({
        entryPoints: [ENTRY_BARREL_PATH],
        format: 'esm',
        outfile: OUTPUT_MINIFIED_JS,
        bundle: true,
        treeShaking: false,
        minify: true,
    })

    await esbuild.build({
        entryPoints: [ENTRY_BARREL_PATH],
        format: 'esm',
        outfile: OUTPUT_JS,
        bundle: true,
        minifyWhitespace: true,
        treeShaking: false,
    })

    await esbuild.build({
        entryPoints: [ENTRY_PATH],
        format: 'esm',
        outdir: OUTPUT_PATH_JS,
    })
}

async function main() {
    try {
        console.clear()
        await useEsBuild()

        console.log(chalk.blueBright('Running rollup for type annotations...'))
    } catch(error: any) {
        console.error(chalk.redBright(error))
    }
}

main()