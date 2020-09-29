import * as pln from "../api"

export function html_wrapper(text: string): string {
  return `\
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>
<body>
<pre style="white-space: pre-wrap;">${text}</pre>
</body>
</html>
`
}
