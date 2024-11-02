
function numberChack(num){
    return new Promise((resolve,reject)=>{
        if (num % 2 == 0) {
            resolve(num)
        }else{
            reject(num)
        }
    })
}

numberChack(5).then(
    (e)=>{
        console.log('the number is Even '+e);
        
    }
).catch(
    (e)=>{
        console.log('The number is Odd '+e);
        
    }
)