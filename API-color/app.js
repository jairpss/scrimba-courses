// 1. Call Scrimba's color API (https://apis.scrimba.com/hexcolors/) to retrieve one random color.
// 2. Use that color to update the background color of the body.


const body = document.body
document.getElementById("btn").addEventListener("click", changeColor)

async function changeColor() {
   
   await fetch("https://apis.scrimba.com/hexcolors?count=2")
    .then(response => response.json())
    .then(data => {
        body.style.backgroundColor = data.colors[0].value
    })
    
}