let jokeBtnEl = document.getElementById("jokeBtn");
let jokeTextEl = document.getElementById("jokeText");
let spinnerEl = document.getElementById("spinner");

function display(value) {
    jokeTextEl.textContent = value;
    spinnerEl.classList.toggle("d-none");
}

function randomJoke() {
    spinnerEl.classList.toggle("d-none");
    jokeTextEl.textContent = "";
    let options = {
        method: "GET"
    };
    fetch("https://apis.ccbp.in/jokes/random", options).then(function(response) {
        return response.json()
    }).then(function(jsonData) {
        let {
            value
        } = jsonData
        display(value)
    });
}
jokeBtnEl.addEventListener("click", randomJoke);