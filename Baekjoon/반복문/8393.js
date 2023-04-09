const fs = require('fs');
const input = Number(fs.readFileSync(0).toString().trim())

let sum = 0

for (let i = 0 ; i <= input; i++)  {
    sum += i
    //sum = sum + i
}

console.log(sum)


// while문으로 풀기
// let i = 1
// let sum = 0
// while ( i <= input ) {
//     sum += i++
// } console.log(sum)