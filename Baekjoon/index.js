const fs = require('fs');
const [ A, B ] = fs.readFileSync('example.txt').toString().trim().split(" ").map((x)=>(x).split(''))

let reverseA = ''
for ( let i = A.length-1; i >= 0; i--) {
    reverseA += A[i]
} 

let reverseB = ''
for ( let i = B.length-1; i >= 0; i--) {
    reverseB += B[i]
} 

if ( reverseA > reverseB ) {
    console.log(reverseA)
} else {
    console.log(reverseB)
}
