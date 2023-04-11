// 방법 1
let array = []
let T = 5
for (let i = 0; i < T; i++) {
    array.push(0)
}

console.log(array)

// 방법 2
array = new Array()
for (let i = 0; i < T; i++) {
    array[i] = 1
}
console.log(array)

// 방법 3
array = new Array(T)
for (let i = 0; i < T; i++) {
    array[i] = 2
}
console.log(array)