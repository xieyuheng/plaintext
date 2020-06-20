// NOTE
// - example link:./plt-trans-http-links.ts
// - example link:../index.ts
// - example link:../../index
// - example link:/index

export function trans_local_links(text: string): string {
  return text.replace(/(\s)(link:)(\/\S*|\.\.?\S*)/gu, (target, space, scheme, link) => {
    return space + `<a href="${`${link}.html`}">${scheme + link}</a>`
  })
}
