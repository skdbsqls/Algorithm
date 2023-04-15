const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n")

//시험 본 과목의 개수
const N = Number(input[0].toString().trim())
//시험 점수들의 배열, 그 속에서 최대값 구하기
let test = input[1].toString().trim().split(" ").map((x)=>Number(x))
const M = Math.max(...test)

//최대값을 바탕으로 조작한 점수의 합 구하기
let score = 0
for ( let i = 0; i < N; i++ ) {
    score += test[i]/M*100
} 

//조작된 평균 구하기
console.log(score/N)