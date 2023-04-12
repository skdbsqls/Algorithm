const fs = require('fs');
const N = Number(fs.readFileSync(0).toString().trim())

for (let i=0; i< N; i++){
    let str = ''
    for(let j=0; j < N-1-i; j++) {
        // 스페이스를 추가
        str += " "
    }
    for(let j=0; j < i+1; j++) {
        // 별 추가
        str += "*"
    }
    console.log(str)
}