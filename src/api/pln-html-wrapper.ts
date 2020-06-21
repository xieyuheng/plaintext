import * as pln from "../api"

export function html_wrapper(
  text: string,
  opts: {
    title?: string
  } = {}
): string {
  const title = opts.title
    ? `<title>${pln.escape_for_xml(opts.title)}</title>`
    : ""

  return `\
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
${title}
</head>
<body>
<pre style="white-space: pre-wrap;">${text}</pre>
</body>
</html>
`
}
