import * as pln from "../api"
import readdir_rec from "fs-readdir-recursive"
import process from "process"
import path from "path"
import fs from "fs"

export function run(file: string, opts: any): void {
  if (!fs.existsSync(file)) {
    console.log(`file does not exist: ${file}`)
    process.exit(1)
  }

  if (!fs.lstatSync(file).isFile()) {
    console.log(`path does not refer to a file: ${file}`)
    process.exit(1)
  }

  const output_file = path.resolve(opts.output)
  if (opts.verbose !== undefined) {
    console.log(`output file: ${output_file}`)
  }

  let text = fs.readFileSync(path.resolve(file), { encoding: "utf-8" })
  text = pln.translate(text, { title: opts.title })

  fs.mkdirSync(path.dirname(output_file), { recursive: true })
  fs.writeFile(output_file, text, (error) => {
    if (error) {
      console.log(error)
    }
  })
}
