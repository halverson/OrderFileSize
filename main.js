var fs = require('fs');
var dirToRead = './';

function getFileSize(filename) {
  'use strict';
  
  var stats = fs.statSync(dirToRead + filename); // create an object storing all of the specified file's stats.
  return stats.size; // get just the size of the specified file.
  
}

fs.readdir(dirToRead, function (err, files) { // read a specified directory and load the file names as an array 'files'.
  'use strict';
  
  var sorted = []; // empty array to use for sorting later.
  
  if (err) {
    console.error(err); // catch and display any errors from the fs module.
  }
  
  for (var x = 0; x < files.length; x++) {
    sorted[x] = {name: files[x], size: getFileSize(files[x])}; // create an object in 'sorted' for each file name in the files array and assign name and size keys and values.
  }
  
  sorted.sort(function (a, b) { // sort the new array by file size in descending order.
    return b.size - a.size;
  });
  
  for (var i = 0; i < sorted.length; i++) {
    console.log(sorted[i].name + ' = ' + sorted[i].size + ' bytes' + '\n');
  }
  
});
