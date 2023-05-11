// 반복 가능한 객체(배열, 유사 배열, 문자열, 맵, 세트 등)
let sports_shose = ['조깅화','축구화','농구화'];

let string =  'this is string literal';

// 반복 가능한 객체 순환
for (let char of string) {
    if (char === 'g') {
        break;
    }
    console.log(char);
}

sports_shose.forEach(shoes => {
    // if(shoes === '축구화') break;
    console.log(shoes);
});

// for문을 사용하지 않고 for~of문을 통해 배열 데이터에서 인덱스를 가져올 수 있다
// entries() 메소드를 통해 배열 데이터를 Array Iterator로 반환한 다음에 
// 내부에서는 비구조화할당을 사용하여 index와 item을 가져올 수 있다
// entries()를 사용하지 않고 배열 데이터를 그대로 사용할 경우에는 내부적으로 비구조화할당을 사용할 수 없다
for (let [index, item] of sports_shose.entries()) {
    console.log(index, item);
}

// 유사 배열 객체
let like_array_obj = { length: 3, 0: '조깅화', 1: '축구화', 2: '농구화' };

// 유사 배열 객체는 반복 가능한 객체(Iterator)가 아님
// for ~ of 문을 사용할 수 없음
// for ( let v of like_array_obj ) {
//     console.log(v)
//     // TypeError: like_array_obj is not iterable
// }

// 유사 배열 객체를 반복 가능한 객체(Iterator)로 변경해야 for ~ of 문 사용 가능
// [...] 구문은 사용하면 오류, Array.from() 매서드를 사용하여 유사 배열 객체를 배열 객체로 변경 가능
for ( let v of Array.from(like_array_obj).entries() ) {
    console.log(v)
}

// for ~ of문을 사용할 때 const, let은 동일한 결과를 가져오나, var를 사용할 경우 문제가 발생한다.

// Iterable 프로토콜의 조건
// 반복 가능한 조건은 객체에 iterator 메소드가 구현되어 있어야 한다.
// 즉, 객체가 [Symbol.iterator] 속성(메소드)를 가져야 하며 인자 없이 호출되고 iterator 객체를 반환해야 한다.

// Iterator 프로토콜의 조건
// next() 메소드를 포함한 객체여야 하며, {value,done}의 속성을 가지는 결과를 객체로 반화해야 한다.
