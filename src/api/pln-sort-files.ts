export function sort_files(files: Array<string>): Array<string> {
  const dirs = files.filter((file) => file.indexOf("/") !== -1)
  dirs.sort()
  files = files.filter((file) => file.indexOf("/") === -1)
  files.sort()
  const results = [...files, ...dirs]
  return results
}
