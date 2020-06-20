import * as pln from "../api"

export function generate_index(files: Array<string>): string {
  return pln.html_wrapper(
    files.map((file) => `<a href="${file + ".html"}">${file}</a>`).join("\n")
  )
}
