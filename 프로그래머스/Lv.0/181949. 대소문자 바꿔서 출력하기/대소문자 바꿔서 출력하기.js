const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let html = '';
    for(let i =0; str.length>i; i++){
        if(str[i] === str[i].toUpperCase()){
            html+= str[i].toLowerCase();
        }else {
            html+= str[i].toUpperCase();
        }
    }
    console.log(html);
    
});