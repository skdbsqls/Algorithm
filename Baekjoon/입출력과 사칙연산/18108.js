const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const y = parseInt(input);
const a = 543
console.log(y-a);

// 간단하게 console.log(input-543)