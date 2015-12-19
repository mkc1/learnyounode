var fs = require('fs');
var file = process.argv[2];

fs.readFile(process.argv[2], function(err, contents){ 
  console.log(contents.toString().split("\n").length-1);
});
