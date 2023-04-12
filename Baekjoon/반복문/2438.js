const fs = require('fs');
const N = Number(fs.readFileSync(0).toString().trim())

let star = ""

for (let i = 0; i < N; i++) {
    star += "*"
    console.log(star)
} 