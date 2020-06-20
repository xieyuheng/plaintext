// NOTE
// - example link://plt-trans-http-links.ts
// - example link://../index.ts
// - example link://../../index

export function trans_local_links(text: string): string {
  const regexp = /(\s)(link:\/\/)(\S*)/gu
  return text.replace(regexp, (target, space, scheme, link) => {
    return space + `<a href="${`${link}.html`}">${scheme + link}</a>`
  })
}
