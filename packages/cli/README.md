cdk-as-cli
==========

A CLI for the AssemblyScript CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/cdk-as-cli.svg)](https://npmjs.org/package/cdk-as-cli)
[![Downloads/week](https://img.shields.io/npm/dw/cdk-as-cli.svg)](https://npmjs.org/package/cdk-as-cli)
[![License](https://img.shields.io/npm/l/cdk-as-cli.svg)](https://github.com/rckprtr//blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @cdk-as/cli
$ cdk-as COMMAND
running command...
$ cdk-as (-v|--version|version)
@cdk-as/cli/0.0.2 darwin-x64 node-v14.4.0
$ cdk-as --help [COMMAND]
USAGE
  $ cdk-as COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cdk-as build [FILE]`](#cdk-as-build-file)
* [`cdk-as help [COMMAND]`](#cdk-as-help-command)

## `cdk-as build [FILE]`

build as project

```
USAGE
  $ cdk-as build [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ cdk-as build
```

_See code: [src/commands/build.ts](https://github.com/rckprtr/cdk-as/blob/v0.0.2/src/commands/build.ts)_

## `cdk-as help [COMMAND]`

display help for cdk-as

```
USAGE
  $ cdk-as help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.1/src/commands/help.ts)_
<!-- commandsstop -->
