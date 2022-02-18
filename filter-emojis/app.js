 // 1. Filter out all duplicate emojis, leaving only one of each emoji.
// 2. Render the unique emojis in uniqueEmojisP.

document.getElementById("btn").addEventListener("click", filterDuplicates)

const emojis = [
    "💘","💘","🌞","🧡","🍇",
    "🧁","⚡️","💝","🐱","💘",
    "🧡","💫","🍓","💜","⚡️",
    "⚡️","🐶","💘","🍇","🐱",
    "💘","💫","🍓","💜","💕",
    "⚡️","💘","🌞","🐱","💘",
    "💫","🍓","💜","⚡️","🧡",
    "💕","🍇","💘"
    ]
    
const allEmojisP = document.getElementById("all-emojis-p")
const uniqueEmojisP = document.getElementById("unique-emojis-p")

for (let emoji of emojis) {
    allEmojisP.textContent += emoji
}

function filterDuplicates() {
    const uniqueEmojis = [...new Set(emojis)]
    
    for (let emoji of uniqueEmojis) {
        uniqueEmojisP.textContent += emoji
    }

}