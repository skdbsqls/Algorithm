const fs = require('fs');

// 문자열 배열 만들기
const input = fs.readFileSync('example.txt').toString().split('')

// a부터 z까지 있는 배열 만들기
let arr = new Array()
for ( let i = 97; i <= 122; i++ ) {
    arr.push(String.fromCharCode(i))
} 

// 정답 배열 만들기 (a부터 z까지 배열과 같은 크기지만 -1로 채워진 배열)
let answer = []
for ( let i = 97; i <= 122; i++ ) {
    answer.push(-1)
}

//입력 문자열의 배열을 돌면서 입력값 위치 표기하기
for ( let i = 0; i < input.length; i++ ) {
    for ( let j = 0; j < arr.length; j++ ) {
        if ( input[i] === arr[j]) {
            answer[j] = input.indexOf(input[i])
        }
    }
}

//join 사용하여 정답 출력
console.log(answer.join(" "))