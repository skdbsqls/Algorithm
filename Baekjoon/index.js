const fs = require('fs');
const input = fs.readFileSync('Baekjoon/example.txt').toString().trim().split("\n")

const T = Number(input[0])

for (let i=1; i<=T; i++) {
    const [ A, B ] = input[i].toString().trim().split(" ").map((x)=>Number(x))
}
console.log( A+B )