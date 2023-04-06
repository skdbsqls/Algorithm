const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
console.log(input+'??!');

// 대신 trim()을 사용해서 문자열 양 옆에 존재하는 공백을 지워줘야 한다.
// 또한 문자열에 ??!가 붙어서 출력되야 하므로 console.log에서 + 를 사용하여 공백없이 문자열을 이어줬다.