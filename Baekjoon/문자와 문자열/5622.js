const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim().split("")

// 딕셔너리 사용
const dial = {
    ABC : 3,
    DEF : 4,
    GHI : 5,
    JKL : 6,
    MNO : 7,
    PQRS : 8,
    TUV: 9,
    WXYZ: 10
}

// 정답 선언
let sum = 0 
// 딕셔너리에서 key를 체크하기(for (key in 딕셔너리)), value 값 가져오기 (딕셔너리[key])
for ( let i = 0; i < input.length; i++ ) {
    for ( key in dial ) {
        if ( key.includes(input[i])) {
            sum += dial[key]
        }
    }
}

console.log(sum)