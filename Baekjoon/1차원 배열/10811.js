const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n")

const [ N, M ] = input[0].toString().trim().split(" ").map((x)=>Number(x))

//1번부터 N번까지 바구니를 배열로 만들기
let arr = Array.from({length: N}, ( v, i )=> i+1)

//M번 역순으로 바꾸기
for (let i = 1; i <= M; i++) {
    let [ a, b ] = input[i].toString().trim().split(" ").map((x)=>Number(x))
    while ( a <= b ) {
        let temp = arr[a-1]
        arr[a-1] = arr[b-1]
        arr[b-1] = temp
        a++
        b--
    } 
} 

console.log(arr.join(" "))