// Write the JavaScript to grab the message from the paragraph and correct its capitalisation.
// It should read "Valentine's"
// Render the corrected message to the DOM.
const str = document.getElementById("paragraph")
const str2 = str.textContent

function correct() {
    
    const sentence = str2.split(" ")

    for (let i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1).toLowerCase()
    }

    str.textContent = sentence.join(" ")
    
}

document.getElementById("btn").addEventListener("click", correct)