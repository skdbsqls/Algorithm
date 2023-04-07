const fs = require('fs');
const year = parseInt(fs.readFileSync('/dev/stdin').toString());

if ( year % 4 == 0 && year % 100 !== 0) {
    console.log("1")
} else if (year % 400 == 0) {
    console.log("1")
} else {
    console.log("0")
}