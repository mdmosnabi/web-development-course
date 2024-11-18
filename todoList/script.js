let totalTask = []

function Update() {
    if (localStorage.getItem('data')) {
        totalTask = JSON.parse(localStorage.getItem('data'))

        let a = document.getElementById('itemcont')
        a.innerHTML = ''
        totalTask.forEach((item, index) => {
            a.innerHTML += `<li class="item">
                <h1 class="working">${index+1}.${totalTask[index]}</h1>
                <div class="RC-btn">
                    <button onclick="Remove(${index})" class="btn">Remove</button>
                    <button onclick="Change(${index})" class="btn">Change</button>
                </div>
            </li>`
        })
    }
}
Update()

function Ok() {
    let input = document.getElementById('input')
    if (input.value.length>3) {
        
        totalTask.push(input.value)
    }
    localStorage.setItem('data', JSON.stringify(totalTask))
    Update()
    input.value = ''
}

function UpdateBTN(ch=false) {
    let a =document.getElementById('inputCon')
    if (ch) {
        a.removeAttribute('hidden')
    } else {
        a.toggleAttribute('hidden')
    }
    if (a.hasAttribute('hidden')) {
        document.getElementById('UpdateBTN').innerHTML = 'Update'
    }
    else{
        document.getElementById('UpdateBTN').innerHTML = 'Hide'
    }
}
function Remove(index) {
    totalTask = totalTask.filter((_,i)=>i!=index)
    localStorage.setItem('data',JSON.stringify(totalTask))
    Update()
    
}
function Change(index) {
    let a = document.getElementById('input')
    a.value = totalTask[index]
    UpdateBTN(true)
    totalTask = totalTask.filter((_,i)=>i!=index)
    localStorage.setItem('data',JSON.stringify(totalTask))
    Update()
}