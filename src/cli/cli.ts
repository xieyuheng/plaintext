import commander from "commander"

export function run(config: any): void {
  const program = new commander.Command()

  program.name("ptl").version(config.version, "-v, --version")

  program.command("build <input-directory>").action(require("./cli-build").run)

  program.parse(process.argv)
}
