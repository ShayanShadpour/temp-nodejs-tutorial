const path = require('path');

//the symbol seperating the paths. diff between systems (ie: apple, windows)
console.log(path.sep);

//creates a filepath
const filePath = path.join('\content','subfolder','test.txt');
console.log(filePath);

//allows you to locate the base of a filepath
const base = path.basename(filePath);
console.log(base);

//gets the big path! remember the application runs on different environments, so the paths to use different resources is different from machine to machine
const absolute = path.resolve(__dirname, 'content', 'subfolder','test.txt');
console.log(absolute);
