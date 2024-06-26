let generateBtn = document.getElementById("generate");
let copyText = document.getElementById("copy");
let para = document.getElementById("para");

let options = {
    method: 'GET',
    headers: { 'X-Api-Key': apikey }
}

let url = "https://api.api-ninjas.com/v1/loremipsum?paragraphs="


// Function to generate the lorem ipsum text
let generatePara = () => {
    let noOfPara = document.getElementById("noPara").value;
    let finalURL = (url + noOfPara)
    fetch(finalURL, options)
        .then(res => res.json())
        .then(data => {
            para.innerText = data.text

        });
};

// Function to copy the text
copyText.addEventListener("click", () => {
    navigator.clipboard.writeText(para.innerText);
    alert("Text copied to clipboard!")
})

generateBtn.addEventListener("click", generatePara);
window.addEventListener("load", generatePara)