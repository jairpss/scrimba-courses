let count = 0;
let countEl = document.getElementById('count-el')


function increment() {
    count = count + 1
    countEl.innerHTML = count;
    //console.log(count);
}

function save() {
    console.log(count)
}
