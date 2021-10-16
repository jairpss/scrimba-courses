const workBtn = document.getElementById("work-btn")
const shortBreakBtn = document.getElementById("short-break-btn")
const longBreakBtn = document.getElementById("long-break-btn")
let timeDisplay = document.getElementById("time-display")
let typeOfCountdown = ""
let timeout;

workBtn.addEventListener("click",function() { startTimer(25) })
shortBreakBtn.addEventListener("click", function() { startTimer(5) })
longBreakBtn.addEventListener("click", function() { startTimer(15) })

function startTimer(time) {
    clearInterval(timeout)
    let allowedTime = time * 60
    showTime(allowedTime)
    timeout = setInterval(function() {
        if (allowedTime == 0) {
            clearInterval(timeout)
            showTime(0)
        } else {
            allowedTime--
            showTime(allowedTime)
        }
        
    }, 1000)
}

function showTime(allowedTime) {
    let time = `${Math.floor(allowedTime / 60)}:${allowedTime % 60}`
    document.title = `Time remaining: ${time}`
    timeDisplay.innerText = time
}