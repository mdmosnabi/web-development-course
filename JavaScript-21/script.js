
var nameq = 'fsasdas'

function name(a){
    
    return console.log(a);
    
}

function Person(name,age,other){
    this.name = name
    this.age = age 
    this.other = other
}

// let obj1 = new  Person('mosnabi',20,545)
// let obj2 = new  Person('mosnsdaabi',200,545)
// let obj3 = new  Person('mosasdasnabi',210,545)
// let obj4 = new  Person('mosnxcsabi',200,545)

let obj1 = {
    name:function (a,b){
        return `${a} and ${b} are ${this.some}`
    }
}
let obj2 = {
    some:'brothers'
}

const new1 = obj1.name.bind(obj2,'x','c')

console.log(new1());


// console.log(obj1.name.apply(obj2,['x','y']));
