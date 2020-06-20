// NOTE
// - example link://plt-trans-http-links.ts
// - example link://../index.ts
// - example link://../../index

export function trans_local_links(text: string): string {
  const regexp = /(\s)(link:\/\/)(\S*)/gu
  return text.replace(regexp, `$1` + link_repr(`$2` + `$3`, `$3`))
}

function link_repr(text: string, link: string): string {
  return `<a href="${`${link}.html`}">${text}</a>`
}
