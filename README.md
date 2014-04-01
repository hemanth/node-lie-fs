> Promise wrappers for Node's file system.

All the async methods of node's `fs` API are converted to promises using lie-denodify.

Below methods, to be precise:

```js
[ 'exists',
  'readFile',
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

 #Installing : 

 `npm install lie-fs`

 #Usage Example:

 ```js
$ = require('lie-fs');

$.stat('/tmp').then(console.log, console.error)

 ```