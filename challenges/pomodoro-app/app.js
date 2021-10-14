const btnWorker = document.getElementById("work-btn")
const shortBreakBtn = document.getElementById("short-break-btn")
const longBreakBtn = document.getElementById("long-break-btn")
let timeDisplay = document.getElementById("time-display")

btnWorker.addEventListener("click", startTimer)
shortBreakBtn.addEventListener("click", startTimer)
longBreakBtn.addEventListener("click", startTimer)

function startTimer() {
    const workTimeSeconds = 1500
    const time = 0
    timeDisplay.innerText = `${Math.floor(workTimeSeconds / 60)}:${workTimeSeconds % 60}`
}