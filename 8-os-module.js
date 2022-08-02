//taking a look at the OS module

const os = require('os'); //now have access to all methods/properties of the os module
const { uptime } = require('process');

//info about current user

const user = os.userInfo();

console.log(user);

//method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds!`);

//operating system info
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);