const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n")

const T = Number(input[0])

for (let i = 1; i <= T; i++) {
    let arr = [...input[i]]
    console.log(arr[0]+arr[arr.length-1]) 
} 