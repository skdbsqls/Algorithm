const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n")
const input2 = input[0].toString().trim().split(" ")

const N = Number(input2[0])
const X = Number(input2[1])
const array = input[1].toString().trim().split(" ").map((x)=>Number(x))

let answer = ''
for (let i = 0; i < N; i++){
    if (array[i] < X) {
        answer += array[i] + " "
    }
} console.log(answer)