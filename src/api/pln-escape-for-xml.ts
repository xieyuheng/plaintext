// NOTE
// https://stackoverflow.com/questions/1091945/what-characters-do-i-need-to-escape-in-xml-documents
// There are only five:
// "   &quot;
// '   &apos;
// <   &lt;
// >   &gt;
// &   &amp;

export function escape_for_xml(text: string): string {
  let result = ""
  for (const c of text) {
    if (c === '"') {
      result += "&quot;"
    } else if (c === "'") {
      result += "&apos;"
    } else if (c === "<") {
      result += "&lt;"
    } else if (c === ">") {
      result += "&gt;"
    } else if (c === "&") {
      result += "&amp;"
    } else {
      result += c
    }
  }
  return result
}
