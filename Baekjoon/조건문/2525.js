const fs = require('fs');
const { listenerCount } = require('process');
const input = fs.readFileSync(0).toString().trim().split("\n")

const [ H, M ] = input[0].split(" ").map(Number)
const plusM = Number(input[1])

const totalM = H * 60 + M
const result = totalM + plusM

if ( result >= 24*60 ) {
    console.log( parseInt((result/60)%24), result%60)
} else {
    console.log( parseInt(result/60), result%60 )
}

// if문을 쓰지 않고 하는 것이 더 깔끔
// console.log( parseInt((result/60)%24), result%60)