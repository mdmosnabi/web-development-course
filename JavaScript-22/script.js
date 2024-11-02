// JavaScript CallBack Functions

/*
function Actual(a,b){  // Need Actual value
    let c = a*b
    return c
}

function Positive(a,b){ // Need Only Positive value
    let c = a*b
    return c>0?c:0
}

function Negitive(a,b){ // Need Only Negitive value
    let c = a*b
    return c<0?c:0
}
console.log('Actual value : '+Actual(5,6));
console.log('Positive value : '+Positive(-5,6));
console.log('Negitive value : '+Negitive(5,6));

*/

function Actual(a,b ,CallBack){  // Need Actual value
    let c = a*b
    return CallBack(c)
}

function mul(x , call){
    return x*100
}

let result = Actual(5,-4,mul)

console.log(result);
