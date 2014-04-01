var assert = require('assert')
, $ = require('./index');

assert.ok($.stat('/tmp').then);
assert.ok(!$.statSync('/tmp').then);