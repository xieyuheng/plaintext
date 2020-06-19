#!/usr/bin/env node

const pkg = require("../package.json")
const cli = require("../lib/cli/cli")

cli.run({
  version: pkg.version,
})
