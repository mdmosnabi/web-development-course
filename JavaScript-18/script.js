// polymorphism in JavaScript

class PrantClass {
    Bio = 'I am prant Class'

    someMethods(){
        console.log('Prant class');
        
    }
}

class ChildClass extends PrantClass{
//body of child

someMethods(){
    console.log('i am child');
    
}

}

let obj = new ChildClass()
let obj1 = new PrantClass()

obj1.someMethods()
// obj.someMethods()
// console.log(obj.Bio);
