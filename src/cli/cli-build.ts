import * as pln from "../api"
import path from "path"
import fs from "fs"
import readdir_rec from "fs-readdir-recursive"

export function run(dir: string, opts: any): void {
  const output = path.resolve(opts.output)
  let files = readdir_rec(dir)
  files = pln.sort_files(files)

  console.log(`output: ${output}`)
  console.log(`number of files: ${files.length}`)

  const index = pln.generate_index(files, opts)
  const index_file = path.resolve(output, "index.html")
  fs.mkdirSync(output, { recursive: true })
  fs.writeFile(index_file, index, (error) => {
    if (error) {
      console.log(error)
    }
  })

  for (const file of files) {
    if (opts.verbose !== undefined) {
      console.log(`- ${file}`)
    }

    let text = fs.readFileSync(path.resolve(dir, file), { encoding: "utf-8" })
    text = pln.escape_for_xml(text)
    text = pln.html_wrapper(text, { title: file })
    text = pln.trans_http_links(text)
    text = pln.trans_local_links(text)
    const output_file = path.resolve(output, file)
    const output_dir = path.dirname(output_file)
    fs.mkdirSync(output_dir, { recursive: true })
    fs.writeFile(`${output_file}.html`, text, (error) => {
      if (error) {
        console.log(error)
      }
    })
  }
}
