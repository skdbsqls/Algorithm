const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n").map((x)=>Number(x))

//42로 나눈 나머지를 배열로 만들기
let arr = new Array()
let i = 0

while (i < 10) {
    arr[i] = input[i] % 42
    i++
} 

//set을 사용하여 배열의 중복값을 제거-> set에 포함된 값을 result 배열로 다시 만들기
const set = new Set(arr)
const result = [...set]

console.log(result.length)