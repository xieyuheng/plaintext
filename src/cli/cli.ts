import commander from "commander"
import * as cli_dir from "./cli-dir"
import * as cli_file from "./cli-file"
import * as cli_toc from "./cli-toc"

export function run(config: any): void {
  const program = new commander.Command()

  program
    .name("plaintext")
    .version(config.version, "-v, --version")

  program
    .command("file <input-file>")
    .description("Translate a plaintext file to html file.")
    .requiredOption("-o, --output <output-file>")
    .option("--title <title-of-the-page>")
    .option("--verbose")
    .action(cli_file.run)

  program
    .command("dir <input-directory>")
    .description("Translate a dir of plaintext files to html files.")
    .requiredOption("-o, --output <output-directory>")
    .option("--verbose")
    .action(cli_dir.run)

  program
    .command("toc <input-directory>")
    .description("Generate plaintext table of contents file from a dir.")
    .requiredOption("-o, --output <output-file>")
    .option("--verbose")
    .action(cli_toc.run)

  program.parse(process.argv)
}
