const fs = require('fs');
const input = fs.readFileSync('Baekjoon/example.txt').toString().trim().split("\n")
const T = Number(input[0])

for (let i=1; i<=T; i++) {
    let num = input[i].split(" ")
    let answer = Number(num[0]) + Number(num[1])
    console.log("Case #" + i.toString() +  ": " + answer.toString())
   
}

// let test = ''

// for (let j=1; j<=T; j++) {
//     test += "Case #" + j + ":" + "\n"
// }

// console.log()
