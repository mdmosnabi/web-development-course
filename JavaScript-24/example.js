
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
// setTimeout( ForCallBack, 2000);
  
// function ForCallBack(){
//   console.log('i am callback...');
  
// }

function ForPromise(){
  return new Promise((resolve) => {
    setTimeout(()=>{
      let c = 'i am Promis'
      resolve(c)
      
    }, 2000)})
}

ForPromise().then(
  (re)=>{
    console.log(re);
    
  }
)

/*
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Simulate fetching data from an API
async function fetchData() {
  console.log("Fetching data...");
  await delay(2000); // Delay of 2 seconds
  console.log("Data fetched!");
  return { data: [1, 2, 3, 4, 5] };
}

// Simulate processing the fetched data
async function processData(data) {
  console.log("Processing data...");
  await delay(3000); // Delay of 3 seconds
  const processedData = data.map((item) => item * 2); // Sample processing: doubling each item
  console.log("Data processed!");
  return processedData;
}

// Simulate saving the processed data to a database
async function saveData(data) {
  console.log("Saving data...");
  await delay(2000); // Delay of 2 seconds
  console.log("Data saved!");
  return "Data successfully saved!";
}

// Main async function to handle all the steps
async function main() {
  console.time("Total time taken");

  const fetchedData = await fetchData(); // Step 1: Fetch data
  const processedData = await processData(fetchedData.data); // Step 2: Process data
  const saveResult = await saveData(processedData); // Step 3: Save data

  console.log(saveResult); // Final output
  console.timeEnd("Total time taken"); // Log the total time
}

main();
*/
