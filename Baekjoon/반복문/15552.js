const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n")

const T = Number(input[0])

for (let i=1; i<=T; i++) {
    const [ A, B ] = input[i].toString().trim().split(" ").map((x)=>Number(x))
    console.log( A+B )
}

/* 첫번째 풀이는 하나씩 출력하는 방법이기 때문에 테스트 케이스가 많아질 경우 시간초과가 뜰 수 있다.
따라서 아래의 풀이처럼 하나의 문자열을 선언한 후 문자열에 결과값을 입력하는 방식으로 시간초과 문제를 해결할 수 있다.

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n")

let T = Number(input[0])
let string = ''

for (let i=1; i<=T; i++) {
    let num = input[i].split(" ")
    string += Number(num[0]) + Number(num[1]) + "\n"
}
console.log(string)
*/