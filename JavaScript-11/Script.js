
// JavaScript loop 
// for (let i=0; i<=100 ;i++){
//     console.log(i);
    
// }

let array = ['a','b','c','d','e',5]

// for(let item of array){
//     console.log(typeof item);
    
// }

let obj = {name:'mosnabi',roll:1888,email:'mrmosnabi@gamil.com'}

// for(let item in obj){
//     console.log(obj[item]);
    
// }

let i = 0
while (i > array.length){
    console.log(array[i]);
    i++
}

do {
    console.log(array[i]);
    i++
} while (i > array.length);