// NOTE
// - examples:
//   link:./plt-trans-http-links.ts
//   link:plt-trans-http-links.ts
//   link:../index.ts
//   link:../../index
//   link:/index

export function trans_local_links(text: string): string {
  return text.replace(/(^|\s)(link:)(\S*)/gu, (target, space, scheme, link) => {
    return space + `<a href="${`${link}.html`}">${scheme + link}</a>`
  })
}
