import * as pln from "../api"

export function translate(text: string): string {
  text = pln.escape_for_xml(text)
  text = pln.trans_http_links(text)
  text = pln.trans_local_links(text)
  text = pln.html_wrapper(text)
  return text
}
