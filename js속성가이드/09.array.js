

let arr = ['html','css','js','react','vue']

//push ( 배열의 마지막 요소를 추가 )
arr.push('go')

//pop ( 배열의 마지막 요소를 제거 )
arr.pop()

//shift ( 배열의 첫 번째 요소를 제거 )
arr.shift()

//unshifr ( 배열의 첫 번째 요소를 추가)
arr.unshift('go')

//splice
arr.splice(1,3,'go','js')

// push,pop,shift,unshift,splice -> 원형을 파괴하는 메소드




//map ( 배열을 받아서 새로운 배열을 만들 때 )
let map = arr.map(function(item,index){
    return `언어의 이름 ; ${item}`
})

console.log( map )

//filter ( 원하는 항목만 가져와서 새로운 배열을 만들 때 )

let number = [10,100,1000,20,5,6,35,50]

let filter = number.filter(function(item){
    return item > 10
})

console.log( filter )

//reduce

let reduce = number.reduce(function(acc,cur){
    return acc + cur
},0)

console.log(reduce)

