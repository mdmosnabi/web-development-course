let totalTask = []

function Update() {
    if (localStorage.getItem('data')) {
        let a = document.getElementById('showTask')
        a.innerHTML = ''
        totalTask = JSON.parse(localStorage.getItem('data'))

        totalTask.forEach((element ,index) => {
            a.innerHTML += `<section class="flex item">
                <div class="text">${index + 1}. ${element}</div>
                <div class="flex RC-btn">
                    <button onclick="Remove(${index})">Remove</button>
                    <button onclick="Change(${index})">Change</button>
                </div>
            </section>`
        });
        

    }
    else {
        document.getElementById('showTask').innerHTML = ' Hare is no task please add a task'
    }
}
Update()

function updateBTN(change=false) {
    if (change) {
        document.getElementById('inp').removeAttribute('hidden')
    }
    else{

        document.getElementById('inp').toggleAttribute('hidden')
        if (!document.getElementById('inp').hasAttribute('hidden')) {
            event.target.innerHTML = 'Hide'
        }
        else if (document.getElementById('inp').hasAttribute('hidden')) {
            event.target.innerHTML = 'Update'
        }
    }
}

async function OK() {
    const data = document.getElementsByName('input')
    if (data[0].value !='') {
        
        totalTask.push(data[0].value)
        data[0].value =''
    
        await localStorage.setItem('data', JSON.stringify(totalTask))
        Update()
    }
    

}

async function Remove(index){
    totalTask = totalTask.filter((_,i)=>i!=index)
    await localStorage.setItem('data', JSON.stringify(totalTask))
    Update()
}

async function Change(index){
    let a=document.getElementsByName('input')[0]
    a.value = totalTask[index]
    await updateBTN(true)
    await Remove(index)
    
}