export function html_wrapper(
  text: string,
  opts: {
    title?: string,
    prolog?: string,
  } = {}
): string {
  return `\
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
${opts.title ? `<title>${opts.title}</title>` : ""}
</head>
<body>
${opts.prolog ? `<pre>${opts.prolog}</pre><hr>` : ""}
<pre>${text}</pre>
</body>
</html>
`
}
