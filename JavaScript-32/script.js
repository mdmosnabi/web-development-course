// CURD operations by fetch API 

// https://jsonplaceholder.typicode.com/posts

// async function fetchData() {
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    
//         const data = await response.json()
    
//         console.log(data);
        
//     } catch (error) {
//         console.log('error',error);
        
//     }
    
// }
// fetchData()

// async function postData(fordata) {
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/posts',{
//             method:'POST',
//             headers:{
//                 'Content-type':'application/json'
//             },
//             body:JSON.stringify(fordata)
//         })
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('error',error);
        
//     }
    
// }
// postData({body:'adasdsadasd',title:'wewweeeeee',userID:5555})

// async function putData(id,fordata) {
//     try {
//         let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
//             method:'PUT',
//             headers:{
//                 'Content-type':'application/json'
//             },
//             body:JSON.stringify(fordata)
//         })
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('error',error);
        
//     }
    
// }
// putData(1,{body:'adasdsadasd',title:'wewweeeeee',userID:5555})

// async function patchData(id,fordata) {
//     try {
//         let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
//             method:'PATCH',
//             headers:{
//                 'Content-type':'application/json'
//             },
//             body:JSON.stringify(fordata)
//         })
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('error',error);
        
//     }
    
// }
// patchData(1,{title:'wewweeeeee'})

async function deleteData(id) {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
            method:'PATCH'
        })
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log('error',error);
        
    }
    
}
deleteData(1)