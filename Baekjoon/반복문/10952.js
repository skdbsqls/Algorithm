const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n")

for (let i=0; i<input.length-1; i++) {
    const [ A, B ] = input[i].toString().trim().split(" ").map((x)=>Number(x))
    console.log( A + B )
}