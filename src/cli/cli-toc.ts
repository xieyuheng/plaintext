import * as pln from "../api"
import readdir_rec from "fs-readdir-recursive"
import process from "process"
import path from "path"
import fs from "fs"

export function run(dir: string, opts: any): void {
  if (!fs.existsSync(dir)) {
    console.log(`dir does not exist: ${dir}`)
    process.exit(1)
  }

  if (!fs.lstatSync(dir).isDirectory()) {
    console.log(`path does not refer to a directory: ${dir}`)
    process.exit(1)
  }

  const output_file = path.resolve(opts.output)
  if (opts.verbose !== undefined) {
    console.log(`output file: ${output_file}`)
  }

  let files = readdir_rec(dir)
  files = pln.sort_files(files)
  if (opts.verbose !== undefined) {
    console.log(`number of files: ${files.length}`)
  }

  const text = files.map((file) => `link:${file}\n`).join("")

  fs.mkdirSync(path.dirname(output_file), { recursive: true })
  fs.writeFile(output_file, text, (error) => {
    if (error) {
      console.log(error)
    }
  })
}
