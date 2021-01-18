import {Command, flags} from '@oclif/command';
import cli from 'cli-ux'
import * as fs from 'fs';
import * as child from 'child_process';
import * as asc from "assemblyscript/cli/asc";
const actorParser = require("../tools/gen/parse_actors.js");

export default class Build extends Command {
  static description = 'build as project'

  static examples = [
    `$ cdk-as build
`,
  ]

  static flags = {
  }

  static args = []

  outputDir = 'build';

  async run() {
    var data = JSON.parse(fs.readFileSync('dfx.json','utf8'));

    if (!fs.existsSync(this.outputDir)){
      fs.mkdirSync(this.outputDir);
    }

    var canisterName = Object.keys(data.canisters)[0]
    actorParser.parse(canisterName, `assembly/${canisterName}.ts`, 'assembly/models.ts')
    await cli.wait(3000) //TODO: need to fix this.
    this.buildAsc(data);
  }

  async buildAsc(dfx: any){
    var canisterName = Object.keys(dfx.canisters)[0]
    asc.ready.then(() => {
      asc.main([
        "./assembly/index.ts",
        "-t",`build/${canisterName}.wat`,
        "-b", `build/${canisterName}.wasm`,
        "--runtime", "none",
        "--use", "abort= ",
        "--use", "~lib/builtins/seed=assembly/index/dfxSeed",
        "--target", "release",
        "--transform","./node_modules/@cdk-as/cdk/transform/index.js"
      ], {
        stdout: process.stdout,
        stderr: process.stderr
      }, (err: Error| null)  => {
        if (err){
          throw err
        } else {
          console.log("Built WASM");
        }
        return 0;
      })
    });
  }
}
