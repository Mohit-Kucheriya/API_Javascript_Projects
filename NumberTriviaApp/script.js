let factBtn = document.getElementById("factBtn");
let randomFactBtn = document.getElementById("randomFact");
let factDiv = document.getElementById("fact");

let url = "http://numbersapi.com/";

let fetchRandomFact = (num) => {
    let finalURL = url + num;
    fetch(finalURL)
        .then((res) => res.text())
        .then((data) => {
            factDiv.style.display = "block";
            factDiv.innerHTML = `<h2>${num}</h2>
            <p>${data}</p>`;
            document.querySelector(".container").append(factDiv);
        });
};

// GetFact on numbers displayed by user
let getFact = () => {
    let numberInput = document.getElementById("numberInput").value;
    // Check if input number field is not empty.
    if (numberInput) {
        // Check if number lies between 0 to 300, the fetch().
        if (numberInput >= 0 && numberInput <= 300) {
            fetchRandomFact(numberInput);
        } //If number is greater than 300 or less than 0 then display error message.
        else {
            factDiv.style.display = "block";
            factDiv.innerHTML = ` <p class="msg">Please enter a number between 0 to 300</p>`;
        }
        // Input field cannot be empty, if then display the error message.
    } else {
        factDiv.style.display = "block";
        factDiv.innerHTML = ` <p class="msg">Input field cannot be empty</p>`;
    }
};

// getRandomFact in number between 0 to 300
let getRandomFact = () => {
    let num = Math.floor(Math.random() * 301);
    fetchRandomFact(num);
};

factBtn.addEventListener("click", getFact);
randomFactBtn.addEventListener("click", getRandomFact);
window.addEventListener("load", getRandomFact);
