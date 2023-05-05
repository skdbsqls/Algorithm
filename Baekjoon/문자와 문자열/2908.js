const fs = require('fs');
// 두 수를 각각 A와 B에 한 글자씩 배열로 담기
const [ A, B ] = fs.readFileSync('example.txt').toString().trim().split(" ").map((x)=>(x).split(''))

// 첫 번째 숫자 뒤집기
let reverseA = ''
for ( let i = A.length-1; i >= 0; i--) {
    reverseA += A[i]
} 

// 두 번째 숫자 뒤집기
let reverseB = ''
for ( let i = B.length-1; i >= 0; i--) {
    reverseB += B[i]
} 

// 두 수를 비교하기
if ( reverseA > reverseB ) {
    console.log(reverseA)
} else {
    console.log(reverseB)
}