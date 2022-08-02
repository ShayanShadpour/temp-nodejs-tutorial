// GLOBALS  - NO WINDOW!!!!!!!!!

// can console.log() any of these 
// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed


console.log("console is available globally");

setInterval(() => {
    console.log("hello world");
}, 1000);