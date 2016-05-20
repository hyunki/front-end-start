// var fs = require('fs');
//
// var str = '';
// fs.readFile('js/config.js', 'utf-8', function (err, data) {
//   if (err) throw err;
//   console.log(data);
//   str += data;
// });
//
// console.log(str);
//
// var concat = require('concat-files');
//
// concat([
//   './js/config.js',
//   './js/main.js'
// ], './dist/app.js', function() {
//   console.log('concat done');
// });

// var fs = require('fs');
// var result = UglifyJS.minify(['./js/config.js', './js/main.js']);
// //console.log(result.code);

// fs.writeFile('test.txt', result.code, function (err) {
//   if (err) throw err;
//   console.log('It\'s saved!');
// });

var UglifyJS = require("uglify-js");
var fs = require("fs");

var result = UglifyJS.minify([
  "./js/config.js",
   "./js/util.js",
   "./js/TodoModel.js",
   "./js/TodoCollection.js",
   "./js/TodoView.js",
   "./js/tmpl.js",
  "./js/main.js" ]);

fs.writeFile('./dist/app.min.js', result.code, function (err) {
  if (err) throw err;
  console.log('done');
});