const startButton =document.getElementById("start")
const stopButton = document.getElementById("stop")
const resetButton =document.getElementById("reset")

let secondsEl=document.getElementById("seconds")
let minutesEl=document.getElementById("minutes")
let seconds=0
let minutes=0
let intervalId=null
onStartClicked=()=>{
    clearInterval(intervalId)
    intervalId=setInterval(()=>{
        if(seconds<59){
            seconds+=1
            secondsEl.textContent=seconds<10?`0${seconds}`:seconds
          
        }
        else{
            secondsEl.textContent="00"
            seconds=0
            minutes+=1
            minutesEl.textContent=minutes<10?`0${minutes}`:minutes

        }
    },1000)
}

onStopClicked=()=>{
    clearInterval(intervalId)
}

onResetClicked=()=>{
    secondsEl.textContent="00"
    minutesEl.textContent="00"
    seconds=0
    minutes=0
}


























startButton.addEventListener("click",onStartClicked)
stopButton.addEventListener("click",onStopClicked)
resetButton.addEventListener("click",onResetClicked)