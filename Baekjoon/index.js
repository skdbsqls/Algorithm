const fs = require('fs');
const { rename } = require('fs/promises');
const input = fs.readFileSync('Baekjoon/example.txt').toString().trim().split("\n").map((x)=>Number(x))

let arr = new Array()
let i = 0

while (i < 10) {
    arr[i] = input[i] % 42
    i++
} 

const set = new Set(arr)
const result = [...set]

console.log(result.length)