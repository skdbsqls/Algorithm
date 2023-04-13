const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n").map((x)=>Number(x))

let arr = new Array()

for (let i = 1; i <= 30; i++) {
    //includes 메소드!
    if ( !input.includes(i) ) arr.push(i)
    // if ( arr.length === 2 ) break
} 

console.log(arr.join("\n"))