// class in JavaScript

class NameOfclass{
    // class body
    constructor(name,roll){
        this.name = name
        this.roll = roll
    }

    getname(){
        return this.name
    }

    getRoll(s){
        return this.getname() +' your roll is'+ this.roll *s
    }
}

let obj = new NameOfclass('mosnabi',12522)
obj.name = 'ratul'

console.log(obj.getRoll(54));



