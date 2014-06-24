var fs = require('fs') 
, $ = require('lie-denodify')
, anAysnc = require('an-async');

Object.keys(fs).forEach(function(k){
  var val = fs[k];
  if (anAysnc(val)) {
    exports[k] = $(val);
  } else {
    exports[k] = val;
  }
});
