const fs = require('fs');
const { listenerCount } = require('process');
const [ a, b, c ] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

//풀이1
if ( a===b && b===c && a===c ) {
    console.log( 10000 + a*1000 )
} else if ( a===b ) {
    console.log ( 1000 + a*100 )
} else if ( b===c ) {
    console.log ( 1000 + b*100 )
} else if ( a===c ) {
    console.log ( 1000 + c*100 )
} else if (!(a===b && b===c && a===c)) {
    const maxValue = Math.max(a,b,c)
    console.log ( maxValue*100)
}

//풀이2
if (a===b || b===c || a===c) {
    if ( a===b && b===c && a===c ) {
        console.log( 10000 + a*1000 )
    }
    else if (a===b) {
        console.log( 1000 + a*100 )
    }
    else if (b===c) {
        console.log ( 1000 + b*100 )
    }
    else if (a===c) {
       console.log ( 1000 + c*100 ) 
    }
} else {
    const maxValue = Math.max(a,b,c)
    console.log ( maxValue*100)
}
