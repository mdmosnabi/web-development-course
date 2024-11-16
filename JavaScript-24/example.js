// function Mult(a,b,callback) {
//   let c = a*b
//   console.log(c);
  
//   return callback(c)
// }

// function negitive(c) {
//   return c<0?c:0
// }

// console.log(Mult(2,5,negitive));

// function Mult(a,b) {
//      return new Promise((resolve, reject) => { 
//       try {
//         let c =a*b
//         console.log(c);
        
//         resolve(c)
//       } catch (error) {
//         reject(error)
//       }
//      })
//   }

//   Mult(5,-9).then(
//     (result)=>{
//       console.log(result>0?result:0);
      
//     }
//   ).then(
//     ()=>{
//       console.log(100);
      
//     }
//   ).catch(
//     (error)=>{
//       console.log(error);
      
//     }
//   )
//   console.log(10000);

function dely(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
console.log(100);


async function show() {
  console.log('start');
 await dely(1000);
  console.log('working');
 await dely(2000);
  console.log('end');
}

show().then(
  ()=>{
    console.log('ok');
    
  }
);
console.log(300);
