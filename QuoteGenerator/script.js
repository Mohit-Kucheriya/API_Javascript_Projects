const quotePara = document.getElementById("quotePara");
const quoteAuthor = document.getElementById("quoteAuthor");
const btn = document.getElementById("btn");

let url = "https://api.quotable.io/random"

let getQuote = () => {
    quotePara.classList.remove("fade");
    quoteAuthor.classList.remove("fade")
    fetch(url)
        .then(data => data.json())
        .then(quote => {
            quotePara.innerHTML = `${quote.content}`
            quoteAuthor.innerHTML = `${quote.author}`

            quotePara.classList.add("fade");
            quoteAuthor.classList.add("fade")
        })

}

btn.addEventListener("click", getQuote)

getQuote()