const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().split("\n")

// 행과 열의 값 지정하기
const row = input.length
let maxcolumn = 0
for ( let i = 0; i < 5; i++ ) {
    if ( input[i].length > maxcolumn ) {
        maxcolumn = input[i].length
    }
} 

// 입력값 행렬에 담기
const arr = new Array(row)
for ( let i = 0; i < row; i++ ) {
    arr[i] = input[i].split('')
}

// 출력값 구하기
let result = ''
for  ( let i = 0; i < maxcolumn; i++ ) {
    for ( let j = 0; j < row; j++ ) {
        if ( !arr[j][i] ) {
            result += ''
        } else {
            result += arr[j][i]
        }
    }
}
console.log(result)