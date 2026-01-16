import chalk from 'chalk'

import fs, { promises as fsPromise } from 'fs'
import path from 'path'

// @ts-ignore
import { transpileFile, transpileProject } from 'ts-to-jsdoc'
import * as esbuild from 'esbuild'
import { glob } from 'glob'

const ENTRY_PATH = '../src/**/*.ts'

const ENTRY_BARREL_DIR = '../src'
const ENTRY_BARREL_FILE = 'index.ts'
const ENTRY_BARREL_PATH = path.join(ENTRY_BARREL_DIR, ENTRY_BARREL_FILE)

const ENTRY_PATH_GLOB = await glob(ENTRY_PATH, {
    posix: true
})
const OUTPUT_PATH_JS = '../build/js'
// const OUTPUT_PATH_TS = '../build/ts'
const OUTPUT_MINIFIED_JS = '../build/index.js'
// const OUTPUT_MINIFIED_TS = '../build/index.ts'

async function createBarrelFile(barrelDirectory: string, barrelFilepath: string, globs: string[]) {
    await fsPromise.writeFile(path.join(barrelDirectory, barrelFilepath), '')
    
    for(let i = 0; i < globs.length; i++) {
        const filepath = globs[i] as string
        
        if(path.basename(filepath) === path.basename(barrelFilepath)) {
            continue
        }

        const srcFile = path.posix.relative(barrelDirectory, filepath)

        // const baseSrcFileName = path.basename(srcFile).replace(/\.[^]+/g, '')
        const exportString = `export * from "./${srcFile}"\n`

        console.log(
            chalk.green(srcFile)
        )

        fsPromise.appendFile(path.join(barrelDirectory, barrelFilepath), exportString)
    }
}

async function useEsBuild() {
    console.log(chalk.yellowBright('Building with esbuild...'))

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
        entryPoints: [ENTRY_PATH],
        format: 'esm',
        outdir: OUTPUT_PATH_JS,
        bundle: true,
        treeShaking: false,
    })
}

async function main() {
    try {
        console.clear()
        await useEsBuild()

        console.log(chalk.bgGreenBright('Done!'))
    } catch(error: any) {
        console.error(chalk.redBright(error))
    }
}

main()