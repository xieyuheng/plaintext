import * as pln from "../api"
import path from "path"
import fs from "fs"
import readdir_rec from "fs-readdir-recursive"

export function run(dir: string, opts: any): void {
  const out = path.resolve(opts.out || "out")
  const files = readdir_rec(dir)

  const index = pln.generate_index(files)
  const index_file = path.resolve(out, "index.html")
  fs.mkdirSync(out, { recursive: true })
  fs.writeFile(index_file, index, (error) => {
    if (error) {
      console.log(error)
    }
  })

  for (const file of files) {
    let text = fs.readFileSync(path.resolve(dir, file), { encoding: "utf-8" })
    text = pln.escape_for_xml(text)
    text = pln.html_wrapper(text)
    const output_file = path.resolve(out, file)
    const output_dir = path.dirname(output_file)
    fs.mkdirSync(output_dir, { recursive: true })
    fs.writeFile(output_file + ".html", text, (error) => {
      if (error) {
        console.log(error)
      }
    })
  }
}
