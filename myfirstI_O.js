var fs = require('fs');

var contents = fs.readFileSync(process.argv[2]).toString();

var result = contents.split("\n");

console.log(result.length-1);
