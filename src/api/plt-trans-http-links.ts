export function trans_http_links(text: string): string {
  return text.replace(/(\s)(https?:\/\/\S*)/gu, (target, space, link) => {
    return space + `<a href="${link}">${link}</a>`
  })
}
