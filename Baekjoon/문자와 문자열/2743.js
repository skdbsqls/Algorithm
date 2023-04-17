const fs = require('fs');
const input = fs.readFileSync(0).toString().trim()

// 문자열을 배열로 변환2
const arr = Array.from(input)
console.log(arr.length)