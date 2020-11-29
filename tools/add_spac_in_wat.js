fs = require('fs');
var inputArgs = process.argv.slice(2);
fs.readFile(inputArgs[0], 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    var search = "export \"canister_update_";
    var replacer = new RegExp(search, 'g')
    data = data.replace(replacer, "export \"canister_update ",)

    search = "export \"canister_query_";
    replacer = new RegExp(search, 'g')
    data = data.replace(replacer, "export \"canister_query ",)

    fs.writeFile(inputArgs[0], data, function (err) {
        if (err) return console.log(err);
      });
  });
  