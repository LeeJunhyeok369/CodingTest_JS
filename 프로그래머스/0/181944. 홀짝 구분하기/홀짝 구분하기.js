const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    num = Number(input[0]);
    let ValString = 'odd'
    if(num%2 === 0) {
        ValString = 'even'
    }
    console.log(`${num} is ${ValString}`)
});