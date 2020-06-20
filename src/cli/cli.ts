import commander from "commander"
import * as cli_dir from "./cli-dir"

export function run(config: any): void {
  const program = new commander.Command()

  program
    .name("plaintext")
    .version(config.version, "-v, --version")

  program
    .command("dir <input-directory>")
    .requiredOption("-o, --output <output-directory>")
    .option("--verbose")
    .option("--title <title-of-index-page>")
    .option("--prolog <prolog-of-index-page>")
    .action(cli_dir.run)

  program.parse(process.argv)
}
