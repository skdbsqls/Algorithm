const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n")

const N = Number(input[0])
const array = input[1].split(" ").map((x)=>Number(x))
const v = Number(input[2])

let cnt = 0

for (let i=0; i<N; i++) {
    if ( array[i] === v ) {
        cnt += 1
    }
} console.log(cnt)