const fs = require('fs');
const input = fs.readFileSync('Baekjoon/example.txt').toString().trim().split("\n")
const T = Number(input[0])

for (let i=1; i<=T; i++) {
    let [ A, B ] = input[i].split(" ").map((x)=>Number(x))
    let answer = A + B
    console.log("Case #" + i.toString() +  ": " + A.toString() + " + " +B.toString() + " = " + answer.toString())
}

/* 새로운 배열을 선언한 다음, 배열 안에 배열을 넣어서 푸는 방법
const T = Number(input[0])

let array1 = new Array(T)
let array1Ind = 0

for(let i=0; i<T; i++) {
    let [ A, B ] = input[i+1].split(" ").map((x)=>Number(x))
    let sum = A + B
    array1[array1Ind++] = [ A, B, sum ]
} 

for (let i = 0; i < array1.length; i++) {
    console.log("Case #" + (i + 1).toString() + ": " + array1[i][0] + " + " + array1[i][1] + " = " + array1[i][2])
} */