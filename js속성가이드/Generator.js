// 제너레이터 함수
function* idMaker() {
    let index = 0;
    while(true) {
        yield index++;
    }
}

// 제너레이터 객체 참조
var gen = idMaker();

// 제너레이터 객체의 next() 멧드 사용
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2

// ES6: 사용자 정의 Iterator + Generator

// 반복 가능한(iterable) 객체
const o = {
    propA: 'A',
    propB: 'B',
    // 반복 가능한 객체의 조건
    // 제너레이터 함수
    [Symbol.iterator]: function* () {
        // 객체의 속성(key) 집합 정렬 후 변수에 참조
        let keys = Object.keys(this).sort();
        // keys 반복 가능한 객체를 순환
        for (let key of keys) {
            // 제너레이터 객체의 next() 메서드를 사용할 때마다
            // 제너레이터를 멈추고 값을 반환
            yield key;
        }
    }
};

// Iterator 객체 참조
const o_iterator = o[Symbol.iterator]();

// Iterator 객체의 next() 메서드 사용
o_iterator.next(); // { value: 'propA', done: false }
o_iterator.next(); // { value: 'propB', done: false }
o_iterator.next(); // { value: undefined, done: true }

for (let v of o_iterator) {
    console.log(v)
}

// ES6: 피보나치 수열 제너레이터

// 피보나치 수열을 반환하는 제너레이터 함수
function* fibonacci (n=1) {

    // current, next 변수 초기화
    let current = 0;
    let next = 1;

    // 조건이 거짓일 때까지 반복
    while (n--) {
        // 제너레이트를 멈춘 후 반환하는 값
        yield current;
        // current, next 업데이트
        [current, next] = [next, current + next]
    }
}

// 피보나치 수열 제너레이터 참조
let fibo5 = fibonacci(5);

// next() 메서드의 반환 값 출력
console.log(fibo5.next().value); // 0
console.log(fibo5.next().value); // 1
console.log(fibo5.next().value); // 1
console.log(fibo5.next().value); // 2
console.log(fibo5.next().value); // 3
console.log(fibo5.next().value); // undifined

// 피보나치 수열을 값으로 하는 배열 참조(제너레이터 함수, 비 구조화 할당 사용)
// [] 내부에서 전개연산자(...)를 사용하면 Iterator 객체를 순환 처리
let [...fibo14] = fibonacci(14);
console.log(fibo14)
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233]

/*
ES6부터는 반복 가능한 객체(iterable)를 for ~ of문을 사용하여 순환차 할 수 있다.
조건에 따라서 break 나 continue를 사용할 수 있다.
무조건 반복할 수 있는 것은 아니다.
Iterable 프로토콜의 조건 즉, [Symblo.iterator] 메소드를 가져야지만 가능
Iterator 프로토콜의 경우, next() 메서드를 가진 객체를 반환했을 때, 
next() 메소드가 { value, done } 속성값을 가지고 있어야 한다.
Generator 함수는 Generator 객체를 생성하게 된다.
Generator 객체 또한 next() 메서드를 가진다.

for 문은 코드 작성에 수고가 많이 들고,
for ~ in 문은 객체를 순환할 때나 사용하고,
forEach 문은 코드가 간결하니 break, continue 사용할 수 없는데 반해
for ~ of 문은 코드가 간결하고 break, continue 사용할 수 있는 장점을 지닌다.

프로토콜 조건에 충족이 된다면 사용자가 직접 사용자 정의 iterable 객체를 만들 수 있다.
Generator 객체는 Generator 함수 내부에 설정되어 있는 yield 키워드를 통해 반환되는 값들을
반복 알고리즘 처리 가능하게 해준다.
*/
