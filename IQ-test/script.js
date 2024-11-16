let time = 0
let timer;
let totalPoint = 0
let totalQuestions = [
    {
        question: ' Find th missing number : 1, 2, 3, 4, 6, 7, 8, 9, 10',
        op1: '6',
        op2: '8',
        op3: '5',
        op4: 'none of them',
        ans: function () { return this.op3 }
    },
    {
        question: ' Find th missing number : 1, 2, 3, 4, 5, 6, 7, 8, 10',
        op1: '9',
        op2: '8',
        op3: '5',
        op4: 'none of them',
        ans: function () { return this.op1 }
    },
    {
        question: 'National poet of Bangladesh',
        op1: 'Kazi Nazrul Islam',
        op2: 'Jashim Uddin',
        op3: 'Sheikh Hasina',
        op4: 'none of them',
        ans: function () { return this.op1 }
    },
]

function UpdateTime() {
    let a = document.getElementById('timer')
    const seconds = Math.floor((time % 600) / 10)
    const minutes = Math.floor(time / 600)
    const floatSec = time % 10

    a.innerHTML = `${minutes}:${seconds}:${floatSec}`
    time++
}
document.getElementById('startButton').addEventListener('click', () => {
    if (!timer) {
        timer = setInterval(UpdateTime, 100)
    }
    gameStart()
})

function gameStart(index = 0) {
    let a = document.getElementById('btnContiner')
    if (typeof index == 'string') {

        clearInterval(timer)
        let IQ = 300 - time -(30-totalPoint)*10

        a.innerHTML = `<h1>Your point is ${totalPoint} and Your IQ is ${IQ} out of 300</h1>
        <div class="btnContiner">

            <button onclick="Restart()" class="btn1">Restart</button>
        </div>`
    }
    else {

        document.getElementById('questionBar').innerHTML = `Question No : ${index+1}`
        document.getElementById('questionBar').style.padding= "10px 20px"
        a.innerHTML = `<h1>${totalQuestions[index].question}</h1>
        <div class="btnContiner">

        <button onclick="Answer('${totalQuestions[index].op1}',${index})" class="btn1">${totalQuestions[index].op1}</button>
        <button onclick="Answer('${totalQuestions[index].op2}',${index})" class="btn2">${totalQuestions[index].op2}</button>
        <button onclick="Answer('${totalQuestions[index].op3}',${index})" class="btn3">${totalQuestions[index].op3}</button>
        <button onclick="Answer('${totalQuestions[index].op4}',${index})" class="btn4">${totalQuestions[index].op4}</button>
        </div>`

    }

}

function Answer(result, index) {
    if (totalQuestions[index].ans() == result) {
        totalPoint += 10
    }
    let a = index >= 2 ? 'stop' : index
    gameStart(a + 1)
}
function  Restart() {
    window.location.reload()
}