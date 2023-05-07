const fs = require('fs');

const input = fs.readFileSync('example.txt').toString().split("\n")

// N과 M 값 숫자로 받아오기
const [ N, M ] = input[0].split(" ").map((x)=>Number(x))


// A행렬 2차원 배열에 담기
const arrA = new Array(N)
for ( let i = 0; i < N; i++ ) {
    arrA[i] = input[i+1].split(" ")
}

// B행렬 2차원 배열에 담기
const arrB = new Array(N)
for ( let i = 0; i < N; i++ ) {
    arrB[i] = input[i+1+N].split(" ")
} 

// 출력 형태의 행렬 빈값으로 만들기
const solution = new Array(N)
for ( let i = 0; i < N; i++ ) {
    solution[i] = new Array(N)
}

// A행렬 + B행렬 출력 행렬에 담기
for ( let i = 0; i < N; i++ ) {
    for ( let j = 0; j < M; j++ ) {
        solution[i][j] = Number(arrA[i][j]) + Number(arrB[i][j]) + (" ")
    }
} 

// 출력하기 1
let result = []
for ( let i = 0; i < solution.length; i++ ) {
    result[i] = solution[i].join("")
}

console.log(result.join("\n"))

// 출력하기 2
for( let i = 0; i < solution.length; i++ ) {
    let temp = ''
    for ( let j = 0; j < solution[i].length; j++ ) {
        temp += solution[i][j]
    }
    console.log(temp)
}