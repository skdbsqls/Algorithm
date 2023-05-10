


function showMessage(){
    return '안녕 난 자바스크립트야!'
}

console.log( showMessage() )

// 함수는 return이 없으면 무조건 undifinded
// 값을 받는 곳: 인자(parameter)
function sum(a,b){

    return a + b

} 

// 함수를 실행할 때 값을 넣는 곳: 인수(argument)
let number = sum(10,20)

console.log( number )