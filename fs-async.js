const {readFile, writeFile} = require('fs');
var first;
var second;
console.log('start');
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }

    first=result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        second=result;
        writeFile('./content/result-async.txt',first+second,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('done with this task');
        });
    });
});
console.log('starting the next one');