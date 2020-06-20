import * as pln from "../api"

export function generate_index(files: Array<string>): string {
  return pln.html_wrapper(files.map(link_repr).join("\n"))
}

function link_repr(file: string): string {
  return `<a href="${file + ".html"}">${file}</a>`
}
