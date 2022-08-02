//fs = file system module
// 2 flavours. async(non-blocking) or sync(blocking)

//syncing this time

//destructuring the methods I want
const {readFileSync, writeFileSync} = require('fs');
console.log('start');
/*
same as

const fs = require('fs');
fs.readFileSync;
*/


//readfilesync needs a path, and the encoding

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);


//readfilesync, needs filename/path, and the value we want to pass

writeFileSync('./content/third.txt', 'Hello, this is the third text file, created with writeFileSync.');

//with backticks

writeFileSync('./content/result-sync.txt', `Here is the result:\n ${first} \n & \n ${second}`);

console.log('done with this task');
console.log('starting next task');

//to append to a file

/*
during writeFileSync, need another input parameter with {flag: 'a'} ex: writeFileSync('./content/result.txt', 'Here is the value', {flag: 'a'})
*/