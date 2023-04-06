const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(parseInt(a/b));
console.log(a%b);

//js에서는 몫을 구하는 연산자가 따로 없기 때문에 몫을 구하기 위해서는 나눗셈 결과를 perseInt() 처리해서 정수만 뽑아낸다.
