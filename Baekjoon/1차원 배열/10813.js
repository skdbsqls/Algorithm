const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n")

const [ N, M ] = input[0].toString().trim().split(" ").map((x)=>Number(x))

let array = new Array(N)

for ( let i = 0; i < N; i++) {
    array[i] = i + 1
}

for ( let i = 1; i <= M; i++) {
    let [ a, b ] = input[i].toString().trim().split(" ").map((x)=>Number(x))
    let temp = array[a-1]
    array[a-1] = array[b-1]
    array[b-1] = temp 
} 

console.log(array.join(" "))