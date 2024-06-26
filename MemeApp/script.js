let memeImg = document.getElementById("memeImg");
let title = document.getElementById("title");
let btnMeme = document.getElementById("btnMeme");

// Meme url
let url = "https://meme-api.com/gimme/"

//Array of subreddits of your choice
let subreddits = ["catmemes", "wholesomememes", "dogmemes", "dankmemes", "sexmemes", "dirtymemes", "funnymemes"];

// Function to getMemes
let getMeme = () => {

    let randomSubreddits = subreddits[Math.floor(Math.random() * subreddits.length)];
    console.log(randomSubreddits);

    fetch(url + randomSubreddits)
        .then(response => response.json())
        .then(data => {

            let newMemeImg = new Image();
            newMemeImg.src = data.url
            // Display image and title only after image gets load

            newMemeImg.onload = () => {
                memeImg.src = data.url;
                title.innerHTML = data.title
            };

        })

}

btnMeme.addEventListener("click", getMeme);
window.addEventListener("load", getMeme)

// First Setting (newMemeImg.src = data.url):
// This is used to load the image in the background without directly displaying it. The new Image() object helps to check if the image is loaded correctly.

// Second Setting (memeImg.src = data.url):
// This updates the src of the actual image element (memeImg) in the HTML to display the image to the user only after it has been fully loaded. This prevents showing a broken or loading image on the webpage.
