// oop in JavaScript

// Inheritance of JavaScript

class Student{
    // class body
    constructor(name,roll){
        this.name = name
        this.roll = roll
    }

    getname(){
        return this.name
    }

    getRoll(s){
        return this.getname() +' your roll is '+ this.roll *s
    }
}

class firstStudent extends Student{
    constructor(a,b){
        super(a,b)

        this.a = a
        this.b = b
    }
    getA(){
        return this.a
    }
}

class secondStudent extends firstStudent {

}


class Student2 extends Student{

}

let obj = new  secondStudent('mosnabi',212)

console.log(obj.getA());


let obj2 = new Student2('sdad',545)

console.log(obj2.getRoll(22));
