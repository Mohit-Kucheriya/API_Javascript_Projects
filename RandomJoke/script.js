const jokePara = document.getElementById("joke");
const btn = document.getElementById("btn");
let url =
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
    jokePara.classList.remove("fade");
    fetch(url)
        .then((data) => data.json())
        .then((response) => {
            jokePara.textContent = `${response.joke}`;
            jokePara.classList.add("fade");
        });
};

btn.addEventListener("click", getJoke);

getJoke();
