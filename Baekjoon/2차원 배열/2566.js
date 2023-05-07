const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().split("\n")

// 9 * 9 행렬에 입력값 담기
const arr = new Array(9)
for ( let i = 0; i < 9; i++ ) {
    arr[i] = input[i].split(" ").map((x)=>Number(x))
}

// 최대값과 최대값 인덱스 찾기
let maxNum = -1
let maxIndex1 = 0
let maxIndex2 = 0

for ( let i = 0; i < 9; i++ ) {
    for ( let j = 0; j < 9; j++ ) {
        if ( arr[i][j] > maxNum ) {
            maxNum = arr[i][j]
            maxIndex1 = i + 1
            maxIndex2 = j + 1
        }
    }
} 

console.log(maxNum + "\n" + maxIndex1 + " " + maxIndex2)