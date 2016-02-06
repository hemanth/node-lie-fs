# lie-fs [![Build Status](https://travis-ci.org/hemanth/node-lie-fs.svg?branch=master)](https://travis-ci.org/hemanth/node-lie-fs)

> Promise wrappers for Node's file system.

All the async methods of node's `fs` API are converted to promises using lie-denodify.

Below methods, to be precise:

```js
[ 'readFile',
  'close',
  'open',
  'read',
  'readSync',
  'write',
  'rename',
  'truncate',
  'ftruncate',
  'rmdir',
  'fdatasync',
  'fsync',
  'mkdir',
  'readdir',
  'fstat',
  'lstat',
  'stat',
  'readlink',
  'symlink',
  'link',
  'unlink',
  'fchmod',
  'lchmod',
  'chmod',
  'lchown',
  'fchown',
  'chown',
  'utimes',
  'futimes',
  'writeFile',
  'appendFile',
  'realpath' ]
 ```

 __Installing__ : 

 `npm install lie-fs`

 __Usage Example__:

 ```js
var lieFS = require('lie-fs');

lieFS.stat('/tmp').then(console.log, console.error)

 ```
