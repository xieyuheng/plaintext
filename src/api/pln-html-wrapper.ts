export function html_wrapper(text: string): string {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>
<body>
<pre>${text}</pre>
</body>
</html>`
}
