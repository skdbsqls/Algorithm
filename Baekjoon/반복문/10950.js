const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n")

const T = Number(input[0])

let i = 1
while ( i <= T ) {
    const [ A, B ] = input[i].toString().split(" ").map( (x)=> Number(x) )
    console.log( A + B )
    i++
}  