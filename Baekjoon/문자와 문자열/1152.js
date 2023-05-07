const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim().split(" ")

if ( input[0] === '') {
    console.log(0)
} else {
    console.log(input.length)
}

// 입력값이 space(공백) 일 경우 input으로 [ '' ]이 출력됨 따라서 input.length는 1이 됨
// 이를 방지하기 위해 입력값이 공백일 경우는 예외 케이스로 출력값이 0이 나오도록 지정해줘야 함