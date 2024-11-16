function Update(){
    let date = new Date()
    let second = date.getSeconds()
    let minute = date.getMinutes()
    let hour = date.getHours()

    const degSecond = (second*6)-90
    const degMinute = (minute*6)-90
    const degHour = (hour*30)+(minute*0.5)-90

    document.getElementById('second').style.transform = `rotate(${degSecond}deg)`
    document.getElementById('minute').style.transform = `rotate(${degMinute}deg)`
    document.getElementById('hour').style.transform = `rotate(${degHour}deg)`
}
function random(max) {
    return Math.floor(Math.random()*max)
}

function bgChang() {
    document.getElementById('body').style.background = `content-box radial-gradient(rgb(${random(255)}, ${random(255)}, ${random(255)}), rgb(${random(255)}, ${random(255)}, ${random(255)}))`
}

setInterval(() => {
    Update()
    bgChang()
}, 1000);

Update()