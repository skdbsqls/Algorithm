const o = {
    name: '제너레이터',
    use: '[symbol.iterator] 메서드로 활용',
    [Symbol.iterator]: function* () {
        let keys = Object.keys(this).sort()
        for ( v of keys ) {
            yield v
        }
    }
}

let o_gen = o[Symbol.iterator]()

o_gen.next()