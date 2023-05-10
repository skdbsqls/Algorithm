


let name = prompt('당신의 이름은?')
let age =  prompt('당신의 나이는?')

// es5
// console.log( '안녕 나는 ' + name + '야 내 나이는 ' + age + '살이야') 

// es6 (template literal)
console.log( `안녕 나는 ${name} 이야 내 나이는 ${age}살이야` )


let str = 'Widget with id'

// 문자열에 특정 문자열이 포함되어 있는지 확인하는 방법(문자열 메소드 includes)
str.includes('id')

// 문자열에서 특정 문자열을 가져오는 방법
let string = 'stringify'

str.slice(0,3)