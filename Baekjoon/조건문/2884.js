const fs = require('fs');
const [ H, M ] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

if ( M >= 45 ) {
    console.log( H, M-45 )
} 
if ( H === 0 && M < 45 ) {
    console.log( 23, 60-(45-M) )
} else if ( M < 45 ) {
    console.log( H-1, 60-(45-M) )
}

/*
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input;

rl.on("line", function (line) {
  input = line.split(' ').map(Number)
}).on("close", function () {
  ///////////////////////////////
  const [hour, minute] = input
  let totalMin = hour * 60 + minute
  let min24 = 24 * 60
  totalMin -= 45
  if (totalMin < 0) {
    totalMin = min24 + totalMin
  }
  console.log(parseInt(totalMin / 60), totalMin % 60)
  /////////////////////////////
  process.exit();
});
*/