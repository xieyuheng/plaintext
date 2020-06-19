export function html_wrapper(text: string): string {
  return `<!DOCTYPE html>
<html>
<head>
</head>
<body>
<pre>${text}</pre>
</body>
</html>`
}
