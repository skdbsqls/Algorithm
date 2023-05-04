const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().split("\n")

// 테스트 케이스의 개수
const T = input[0]

for ( let i = 1; i <= T; i++ ) {
    // 반복 횟수 R, 문자열 S
    let [ R, S ] = input[i].toString().split(" ")
    // 문자열 S를 한 글자씩 나누기
    let Sarr = S.toString().split("")
    // 정답 선언
    let answer = ''
    // R번 만큼 S의 문자열 한글자씩 반복
    for ( let i = 0; i < Sarr.length; i++ ) {
        for ( let j = 0; j < R; j++) {
            answer += Sarr[i]
        }
    }
    console.log(answer)
} 