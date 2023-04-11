const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n")
const T = Number(input[0])

//풀이1
for (let i=1; i<=T; i++) {
    let num = input[i].split(" ")
    let answer = Number(num[0]) + Number(num[1])
    console.log("Case #" + i.toString() +  ": " + answer.toString())
}

let array = new Array()
let arrayIdx = 0

/*풀이2
for (let i=1; i<=T; i++) {
    let num = input[i].split(" ")
    answer = Number(num[0]) + Number(num[1])
    array[arrayIdx++] = answer
}

for (let i = 0; i < array.length; i++) {
    let temp = ''
    console.log("Case #" + (i + 1).toString() + ": " + array[i].toString())
}

풀이3
let strArray = new Array()

for (i = 0; i < T; i++) {
    strArray[i] = "Case #" + (i + 1).toString() + ": "
}
let array = new Array()

for (let i=1; i<=T; i++) {
    let num = input[i].split(" ")
    answer = Number(num[0]) + Number(num[1])
    array[arrayIdx++] = answer
}

for (i = 0; i < array.length; i++) {
    console.log(strArray[i] + array[i].toString())
}
*/