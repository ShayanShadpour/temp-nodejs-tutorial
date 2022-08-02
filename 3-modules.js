
//CommonJS(the library used by node under the hood), every file is a module (by default)

//Modules - Encapsulated Code (only shares the minimum)


const names = require('./4-names');
const sayHi = require('./5-utils');

const data = require('./6-alternative-flavor');

require('./7-mindgrenade');


console.log(names);
console.log(data);

sayHi("Azir");
sayHi(names.john);
sayHi(names.peter);