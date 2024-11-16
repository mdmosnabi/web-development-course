function dely(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

// console.log('1st');

async function show(){
  console.log('start');
  await dely(1000)
  console.log('working');
  await dely(2000)
  console.log('end');
  
}
show()
// console.log('3rd');
