import * as pln from "../api"

export function translate(text: string, opts: { title?: string } = {}): string {
  text = pln.escape_for_xml(text)
  text = pln.html_wrapper(text, opts)
  text = pln.trans_http_links(text)
  text = pln.trans_local_links(text)
  return text
}
