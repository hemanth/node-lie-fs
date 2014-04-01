var fs = require('fs') 
, $ = require('lie-denodify')
, anAysnc = require('an-async')
, extend = require('util')._extend
, pfs = extend(fs)
, async = Object.keys(pfs).filter(function(k){return anAysnc(pfs[k]) });

console.log(async);

async.forEach(function(f){
  pfs[f] = $(pfs[f]);
});

module.exports = pfs;
