const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const A = input[0];
const B = input[1];

const a = B[2];
const b = B[1];
const c = B[0];

console.log(A*a);
console.log(A*b);
console.log(A*c);
console.log((A*a)+(A*b)*10+(A*c)*100);

//풀이2
// const fs = require('fs');
// const [num1, num2] = fs.readFileSync('/dev/stdin').toString().split('\n')

// const A = Number(num1);
// const B = Number(num2);

// const onenum = Number(num2[2]);
// const tennum = Number(num2[1]);
// const hundnum = Number(num2[0]);

// console.log(A*onenum);
// console.log(A*tennum);
// console.log(A*hundnum);
// console.log(A*B);