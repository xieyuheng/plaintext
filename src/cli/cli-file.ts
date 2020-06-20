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
  console.log(`output file: ${output_file}`)

  let text = fs.readFileSync(path.resolve(file), { encoding: "utf-8" })
  text = pln.escape_for_xml(text)
  text = pln.html_wrapper(text, { title: opts.title, prolog: opts.prolog })
  text = pln.trans_http_links(text)
  text = pln.trans_local_links(text)
  const output_dir = path.dirname(output_file)
  fs.mkdirSync(output_dir, { recursive: true })
  fs.writeFile(`${output_file}`, text, (error) => {
    if (error) {
      console.log(error)
    }
  })
}
