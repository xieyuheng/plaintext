export function trans_http_links(text: string): string {
  const regexp = /(\s)(https?:\/\/\S*)/gu
  return text.replace(regexp, `$1` + link_repr(`$2`))
}

function link_repr(link: string): string {
  return `<a href="${link}">${link}</a>`
}
