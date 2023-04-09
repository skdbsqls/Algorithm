const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n")

const X = Number(input[0])
const N = Number(input[1])

let array = input.slice(2,input.length)
let plus = 0
for (let i= 0; i < array.length; i++) {
    const [ a, b ] = array[i].toString().trim().split(" ").map((x)=>Number(x))
    const sum = a*b
    plus += sum
    // plus += a*b
} 

if ( plus === X ) {
    console.log("Yes")
} else {
    console.log("No")
}