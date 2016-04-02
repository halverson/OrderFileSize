var fs = require('fs');

function getFileSize(filename) {
  'use strict';
  var stats = fs.statSync('test/' + filename),
      fileSize = stats.size;
  return fileSize;
}

fs.readdir('test/', function (err, files) {
  'use strict';
  
  if (err) {
    console.error(err);
  }
  
  for (var i = 0; i < files.length; i++) {
    console.log(files[i] + ' is ' + getFileSize(files[i]) + ' bytes.');
  }
  
});
