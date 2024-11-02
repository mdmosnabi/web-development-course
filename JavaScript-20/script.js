// Javascript functions..

function Name(a,b){
    return a*b
}

let a = (x,y)=>{return x-y}

(function (){
    console.log('hello world');
    
}())

function Rest(...arg){
    for (const element of arg) {
        console.log(element*2);
        
    }
    
}

console.log(Rest(1,51.5,55,4,5,5,8));


// console.log(a(45,5));
