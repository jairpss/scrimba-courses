const greetingDisplay = document.getElementById("greeting-display")
document.getElementById("form").addEventListener("input", writeGreeting)

function writeGreeting() {
    // Write a function update the message in the greeting-display paragraph each time the form is updated.
    const toInput = document.getElementById("recipient-input").value
    const fromInput = document.getElementById("sender-input").value
    const greeting = document.getElementById("greeting-select").value

    greetingDisplay.textContent = `To ${toInput}, ${greeting} From ${fromInput}`
}
