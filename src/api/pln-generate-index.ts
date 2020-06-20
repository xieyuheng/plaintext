import * as pln from "../api"

export function generate_index(files: Array<string>): string {
  return pln.html_wrapper(files.map(generate_link).join("\n"))
}

export function generate_link(file: string): string {
  return `<a href="${file + ".html"}">${file}</a>`
}
