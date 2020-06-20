import commander from "commander"

export function run(config: any): void {
  const program = new commander.Command()

  program.name("plaintext").version(config.version, "-v, --version")

  program
    .command("build <input-directory>")
    .option("-o, --output <output-directory>")
    .option("--verbose")
    .option("--title <title-of-index-page>")
    .option("--prolog <prolog-of-index-page>")
    .action(require("./cli-build").run)

  program.parse(process.argv)
}
