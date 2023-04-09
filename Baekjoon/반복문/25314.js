//repeat함수 사용하기
const fs = require('fs');
const input = Number(fs.readFileSync(0).toString().trim())
const N = parseInt(input/4)

console.log("long ".repeat(N) + "int")

//for문 이용하기
// const fs = require('fs');
// const input = Number(fs.readFileSync('Baekjoon/example.txt').toString().trim())
// const N = parseInt(input/4)

let string = ""
for (let i=0; i < N; i++) {
    string += "long "
}
console.log(string + "int")