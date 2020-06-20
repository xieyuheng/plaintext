export function trans_http_links(text: string): string {
  const regexp = /(\s)(https?:\/\/\S*)/gu
  return text.replace(regexp, (target, space, link) => {
    return space + `<a href="${link}">${link}</a>`
  })
}
