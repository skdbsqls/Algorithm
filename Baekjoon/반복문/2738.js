const fs = require('fs');
const input = fs.readFileSync(0).toString().trim()

const num = Number(input)
let i = 1

while ( i <= 9 ) {
    const result = num * i
    console.log(num + " * " + i + " = " + result) 
    i++
}