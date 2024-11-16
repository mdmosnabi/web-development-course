function checkNumber(num){
    return new Promise((resolve, reject) => { 
        if (num%2 ==0) {
            resolve(num)
        }else{
            reject(num)
        }
     })
}
checkNumber(785).then(
    (a)=>{
        console.log('the number is event',a);
        
    }
).catch(
    (a)=>{
        console.log('the number is Odd',a);
        
    }
)