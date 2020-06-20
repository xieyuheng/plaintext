import commander from "commander"
import * as cli_dir from "./cli-dir"
import * as cli_file from "./cli-file"

export function run(config: any): void {
  const program = new commander.Command()

  program
    .name("plaintext")
    .version(config.version, "-v, --version")

  program
    .command("dir <input-directory>")
    .requiredOption("-o, --output <output-directory>")
    .option("--verbose")
    .option("--index-title <title-of-the-index-page>")
    .option("--index-prolog <prolog-of-the-index-page>")
    .action(cli_dir.run)

  program
    .command("file <input-file>")
    .requiredOption("-o, --output <output-file>")
    .option("--title <title-of-the-page>")
    .option("--prolog <prolog-of-the-page>")
    .action(cli_file.run)

  program.parse(process.argv)
}
