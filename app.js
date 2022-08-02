//npm - global command, comes with node
//npm --version

//local dependency - can use it only in this particular project
// npm i <packageName>

//global dependency - can use it in any project
//npm install -g <packageName>

//package.json - manifest file (stores important info about project/packages)
//Three ways to create
//1. manual approach (create package.json in the root, create properties)
//2. npm init (step by step, press enter to skip)
//3. npm init -y (everything default)

const _ = require('lodash');


const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);

console.log(newItems);