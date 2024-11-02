// oop in JavaScript (Encapsulations)

class Bank{
    #blance
    constructor(name,amount){
        this.name = name
        this.#blance = amount
    }

    getName(){
        return this.name
    }
    deposit(amount){
        console.log(this.#blance += amount);
        
        return this.#blance
    }
    getBlance(){
        return this.#blance
    }
}

let obj = new Bank('ratul',1000)

obj.other = 1500

console.log(obj.other);

console.log( obj.getBlance());

