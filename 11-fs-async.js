//async fs

const {readFile, writeFile} = require('fs');
console.log('start');
//callback function
readFile('./content/first.txt', 'utf-8', (err, result)=>{
    if(err){
        console.log('error');
        return;
    }
    console.log(result);
    const first = result;

    readFile('./content/second.txt', 'utf-8', (err, result) =>{
        if(err){
            console.log('error');
            return;
        }
        const second = result;
        console.log(second);

        writeFile(
            './content/result-async.txt', 
            `Here is the result: ${first}, ${second}`,
            (err, result)=>{
                if(err){
                    console.log('error');
                    return
                }
                console.log('finished task');
    });
} )
})

console.log('starting next task...');