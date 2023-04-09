input = [1,2,3,4,5,6]

//slice함수 사용하기: slice(시작값, 끝값) 여기서 끝값은 내가 원하는 인덱스 +1을 해줘야 함
//예를 들어 끝값을 5로 지정할 경우 인덱스 5의 전 값까지 불러옴
//따라서 배열의 끝까지 가져오고 싶을 경우 끝값은 배열.length로 지정하면 됨
let array = input.slice(2,input.length)
console.log(array)

//for문으로 내가 원하는 배열을 가져오는 방법
let array2 = []
for (let i=2; i < input.length; i++) {
    array2.push(input[i])
} 
console.log(array2)