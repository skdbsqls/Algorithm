const fs = require('fs');
const input = fs.readFileSync('Baekjoon/example.txt').toString().trim().split("\n")
const [ N, M ] = input[0].toString().trim().split(" ").map((x)=>Number(x))

let array = new Array(N)

for (let i = 0; i < N; i++) {
    array[i] = 0
} 


for (let i = 1; i < input.length; i++) {
    for ( let [ a, b, c ] = input[i].toString().trim().split(" ").map((x)=>Number(x)); a <= b; a++ ) {
        array[a-1] = c
    } 
}
/*위의 이중 for문을 가독성 좋게 만들 경우
for (let i = 1; i < input.length; i++) {
    let [ a, b, c ] = input[i].toString().trim().split(" ").map((x)=>Number(x))
    for (let j = a-1; j <= b-1; j++) {
        array[j] = c
    } 
}
*/

console.log(array.join(" "))
/* join을 사용하지 않을 경우
let answer = ''

for (let i = 0; i < array.length; i++) {
    answer += array[i] + " "
} 
console.log(answer)
*/