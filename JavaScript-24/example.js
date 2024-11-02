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
