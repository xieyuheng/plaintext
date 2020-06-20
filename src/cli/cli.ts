import commander from "commander"

export function run(config: any): void {
  const program = new commander.Command()

  program.name("plaintext").version(config.version, "-v, --version")

  program
    .command("build <input-directory>")
    .option("-o, --out <output-directory>")
    .option("--verbose")
    .action(require("./cli-build").run)

  program.parse(process.argv)
}
