const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().split("\n")

const N = input[0]
const K = input[1].split("").map((x)=>Number(x))

let answer = 0
for ( let i = 0; i < K.length; i++ ) {
    answer += K[i]
}

console.log(answer)