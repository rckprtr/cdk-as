fs = require('fs');
var inputArgs = process.argv.slice(2);
fs.readFile(inputArgs[0], 'utf8', function (err,data) {
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

    fs.writeFile(inputArgs[0], data, function (err) {
        if (err) return console.log(err);
      });
  });
  