//- The values from the drop downs are strings, you'll need to change them to numbers.
//- use .checked to check for balloons.


document.getElementById("btn").addEventListener("click", calculate)
let costEl = document.getElementById("cost-el")

function calculate() {
    // 1. Write the JavaScript to calculate the total cost of the selected options from the form.
    // 2. Display the total cost in the cost-el span.
    let foodElement = document.getElementById("food-select").value
    let transElement = document.getElementById("transport-select").value

    costEl.innerHTML = parseInt(foodElement) + parseInt(transElement)
    console.log(foodElement)
    console.log(transElement)
}
 