const btnWorker = document.getElementById("work-btn")
const shortBreakBtn = document.getElementById("short-break-btn")
const longBreakBtn = document.getElementById("long-break-btn")

btnWorker.addEventListener("click", startTimer)
shortBreakBtn.addEventListener("click", startTimer)
longBreakBtn.addEventListener("click", startTimer)

function startTimer() {
    console.log("button clicked")
}