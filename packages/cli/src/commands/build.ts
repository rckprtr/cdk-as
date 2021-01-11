import {Command, flags} from '@oclif/command';
import cli from 'cli-ux'
import * as fs from 'fs';
import * as child from 'child_process';
const asc = require("assemblyscript/cli/asc");
const actorParser = require("../tools/gen/parse_actors.js");

export default class Build extends Command {
  static description = 'build as project'

  static examples = [
    `$ cdk-as build
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = []

  async run() {
    var data = JSON.parse(fs.readFileSync('dfx.json','utf8'));
    var canisterName = Object.keys(data.canisters)[0]
    actorParser.parse(canisterName, `assembly/${canisterName}.ts`, 'assembly/models.ts')
    await cli.wait(3000) //need to fix this.
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
        "--target", "release"
      ], {
        stdout: process.stdout,
        stderr: process.stderr
      }, (err:any) => {
        if (err){
          this.log("Build Error:");
          this.log(err);
          throw err
        } else {
          console.log("Built WAT");
          this.updateWat(dfx);
        }
      })
    });
  }

  async updateWat(dfx: any) {
    var canisterName = Object.keys(dfx.canisters)[0]
    fs.readFile(`build/${canisterName}.wat`, 'utf8',  (err,data) => {
      if (err) {
        return console.log(err);
      }
      
      //@externals should be extended to support spaces in export names
      var search = "export \"canister_update_";
      var replacer = new RegExp(search, 'g')
      data = data.replace(replacer, "export \"canister_update ",)
  
      //@externals should be extended to support spaces in export names
      search = "export \"canister_query_";
      replacer = new RegExp(search, 'g')
      data = data.replace(replacer, "export \"canister_query ",)
  
      //commas ',' are illegal characters in WAT so 
      //just replace it with a 0x2C ASCII representation
      search = ","; 
      replacer = new RegExp(search, 'g')
      data = data.replace(replacer, "%2C",)
  
      fs.writeFile(`build/${canisterName}.wat`, data,  (err) => {
          if (err) return console.log("WAT update error:",err);
          this.buildWat(dfx);
        });
    });
    
  }

  async buildWat(dfx: any){
    var canisterName = Object.keys(dfx.canisters)[0];
    var foo: child.ChildProcess = child.exec(`wat2wasm ./build/${canisterName}.wat -o build/${canisterName}.wasm`, (error: any, stdout: string, stderr: string) => {
      this.log(("Built WASM"))
      //this.log("Info:", error, stdout, stderr);      
    });
  }
}
