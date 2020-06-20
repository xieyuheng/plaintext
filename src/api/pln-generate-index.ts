import * as pln from "../api"

export function generate_index(files: Array<string>, opts: { [key: string]: any } = {}): string {
  const text = files
    .map((file) => `<a href="${file + ".html"}">${file}</a>`)
    .join("\n")
  return pln.html_wrapper(text, opts)
}
