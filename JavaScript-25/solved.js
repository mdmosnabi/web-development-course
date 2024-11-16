<<<<<<< HEAD
function checkNumber(num){
    return new Promise((resolve, reject) => { 
        if (num%2 ==0) {
=======

function numberChack(num){
    return new Promise((resolve,reject)=>{
        if (num % 2 == 0) {
>>>>>>> 42101ff697a10bbc65a4416339902fd48d11e7f0
            resolve(num)
        }else{
            reject(num)
        }
<<<<<<< HEAD
     })
}
checkNumber(785).then(
    (a)=>{
        console.log('the number is event',a);
        
    }
).catch(
    (a)=>{
        console.log('the number is Odd',a);
=======
    })
}

numberChack(5).then(
    (e)=>{
        console.log('the number is Even '+e);
        
    }
).catch(
    (e)=>{
        console.log('The number is Odd '+e);
>>>>>>> 42101ff697a10bbc65a4416339902fd48d11e7f0
        
    }
)