import * as pln from "../../api"
import readdir_rec from "fs-readdir-recursive"
import process from "process"
import path from "path"
import fs from "fs"

export const command = "dir <dir>"

export const description = "translate a dir of plaintext files to html files"

export const builder = {
  output: { type: "string", alias: "o", demandOption: true },
  verbose: { type: "boolean", default: false },
}

interface Argv {
  dir: string
  output: string
  verbose: boolean
}

export const handler = async (argv: Argv) => {
  const { dir } = argv

  if (!fs.existsSync(dir)) {
    console.log(`dir does not exist: ${dir}`)
    process.exit(1)
  }

  if (!fs.lstatSync(dir).isDirectory()) {
    console.log(`path does not refer to a directory: ${dir}`)
    process.exit(1)
  }

  const output_dir = path.resolve(argv.output)
  if (argv.verbose) {
    console.log(`output dir: ${output_dir}`)
  }

  let files = readdir_rec(dir)
  files = pln.sort_files(files)
  if (argv.verbose) {
    console.log(`number of files: ${files.length}`)
  }

  for (const file of files) {
    if (argv.verbose) {
      console.log(`- ${file}`)
    }

    const output_file = path.resolve(output_dir, file + ".html")

    let text = fs.readFileSync(path.resolve(dir, file), { encoding: "utf-8" })
    text = pln.translate(text, { title: file })

    fs.mkdirSync(path.dirname(output_file), { recursive: true })
    fs.writeFile(output_file, text, (error) => {
      if (error) {
        console.log(error)
      }
    })
  }
}
