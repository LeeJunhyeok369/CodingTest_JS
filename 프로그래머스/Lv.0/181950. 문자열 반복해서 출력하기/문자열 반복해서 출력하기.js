const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    html = "";
    n = Number(input[1]);

    for(let i = 0; n>i; i++){
        html+=str;
    }
    console.log(html);
    
});