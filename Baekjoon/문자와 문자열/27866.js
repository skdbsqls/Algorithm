const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n")

const S = input[0]
const i = Number(input[1])
//문자열을 배열로 반환하기
const arr = [...S]

console.log(arr[i-1])