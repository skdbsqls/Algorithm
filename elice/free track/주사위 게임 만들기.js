//주사위 게임 만들기  
function rand(maxNum) {
    var dice = Math.floor(Math.random() * maxNum) + 1;
    console.log(dice)
}

rand(6);