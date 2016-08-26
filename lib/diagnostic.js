// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should add all the numbers and pass the result as the second argument to
// the callback provided. e.g `callback(null, sum);`.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// an Error should be passed as the first argument to the callback provided,
// e.g. `callback(new Error('line not a number'));`
//

'use strict';

const fs = require('fs'); // jshint ignore: line

const sumLines = (filename, callback) => {
let inFile = process.argv[2];
// let outFile = process.argv[3];
fs.readFile(inFile, { encoding: 'utf8' }, (error, data) => {
  if (error) {
    console.error(error.stack);
    return;
  }
  let res = data.reduce(function(prev, curr){
    return (Number(prev) || 0) + (Number(curr) || 0);
});
console.log(res);
callback();
});
};



module.exports = {
  sumLines,
};
