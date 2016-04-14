// var fs = require('fs');
//
// fs.writeFile('message.txt', 'Hello Node', function (err) {
//   if (err) throw err;
//   console.log('It\'s saved!');
// });


var prettyBytes = require('pretty-bytes');

console.log(prettyBytes(100));
console.log(prettyBytes(1337));
