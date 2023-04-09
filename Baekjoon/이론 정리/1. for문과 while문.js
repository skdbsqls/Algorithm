let array = [1,2,3,4,5]

for (let i = 0; i < array.length; i++) {
    let sumA = 0
    for(let j = i; j >= 0; j-- ) {
        sumA += array[j]
    }
    console.log(sumA)
}

console.log("메롱메롱")

let i = 0;
while (i < array.length) {
    let sumA = 0
    let j = i
    while (j >= 0) {
        sumA += array[j]
        j -= 1
    }
    i += 1
    console.log(sumA)
}

//배열이 비어 있는 지 확인하는 방법
let array1 = [1,2,3,4]
while (array1.length) {
    console.log(array1.pop())
}