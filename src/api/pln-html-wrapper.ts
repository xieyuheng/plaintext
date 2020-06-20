import * as pln from "../api"

export function html_wrapper(
  text: string,
  opts: {
    title?: string
    prolog?: string
  } = {}
): string {
  const title = opts.title
    ? `<title>${pln.escape_for_xml(opts.title)}</title>`
    : ""

  const prolog = opts.prolog
    ? `<pre>${pln.escape_for_xml(opts.prolog)}</pre>`
    : ""

  return `\
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
${title}
</head>
<body>
${prolog}
<pre>${text}</pre>
</body>
</html>
`
}
