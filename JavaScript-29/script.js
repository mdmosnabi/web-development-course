// let element = document.getElementById('button')

// function work() { 
//     document.getElementById('target').innerHTML = ' hello sister'
//     alert('ok')
//     // element.removeEventListener('click',work)
// }

// element.addEventListener('click',work)

document.getElementById('div').addEventListener('click',()=>{
    alert('i am div ')

})

document.getElementById('para').addEventListener('click',()=>{
    alert('i am para ')
    event.stopPropagation()
})