const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n")

const N = Number(input[0])
const array =input[1].toString().trim().split(" ").map((x)=>Number(x))

//풀이1
let Max = Number.MIN_VALUE
let Min = Number.MAX_VALUE

for( let i = 0; i < N; i++) {
    if (Max < array[i]) {
        Max = array[i]
    }
    
    if (Min > array[i]) {
        Min = array[i]
    }
} console.log(Min, Max)


//풀이2(인덱스로 접근)
let max = 0
let min = 0

for (let i = 1; i < N; i++){
    if (array[max] < array[i]) {
        max = i
    }

    if (array[min] > array[i]) {
        min = i
    }
}
console.log(array[min],array[max])