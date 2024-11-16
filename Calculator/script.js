let input = ''

// button functionalty
document.querySelectorAll('.number').forEach((item)=>{
    item.addEventListener('click',()=>{
        input += item.innerHTML

        document.getElementById('output').innerHTML = input
        
    })
})


// get out put
function Result() {
    try {
        let a = eval(input)
        document.getElementById('output').innerHTML = a
        console.log(input);
        
    } catch (error) {
        document.getElementById('output').innerHTML = 'Syntext error'
        console.log(error);
        
    }
    input = ''
}

// Clear and Delete

function AC() {
    input = ''
    document.getElementById('output').innerHTML = input
}

function Delete() {
    let a = input.lastIndexOf()

    input = input.slice(0,a)
    document.getElementById('output').innerHTML = input
}
