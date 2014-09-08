var fs = require('fs') 
, Promise = require('lie')
, $ = require('lie-denodify')
, anAysnc = require('an-async');

Object.keys(fs).forEach(function(k){
  var val = fs[k];
  if (k === 'exists') {
    exports[k] = exists;
  }
  else if (anAysnc(val)) {
    exports[k] = $(val);
  }
  else {
    exports[k] = val;
  }
});

function exists (path) {
  return new Promise(function (resolve) {
    return fs.exists(resolve);
  })
}
