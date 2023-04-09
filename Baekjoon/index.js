const fs = require('fs');
const input = Number(fs.readFileSync('Baekjoon/example.txt').toString().trim())
const N = parseInt(input/4)

let string = ""
for (let i=0; i < N; i++) {
    string += "long "
}
console.log(string + "int")

console.log("long ".repeat(N) + "int")