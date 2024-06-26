const btnSearch = document.getElementById("btnSearch");
const inputCountry = document.getElementById("inputCountry");

btnSearch.addEventListener("click", () => {
    let countryName = inputCountry.value;
    let countryUrl = `https://restcountries.com/v3.1/name/${countryName}/?fullText=true`;
    fetch(countryUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data[0]);
            console.log(data[0].capital[0]);
            console.log(data[0].continents[0]);
            console.log(data[0].flags.svg);
            console.log(
                Object.values(data[0].languages).toString().split(", ").join(", ")
            );
            console.log(data[0].population);
            console.log(data[0].timezones[0]);
            console.log(Object.keys(data[0].currencies)[0]);
            console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
            console.log(data[0].currencies[Object.keys(data[0].currencies)].symbol);

            // let result = document.getElementById("result")
            result.innerHTML = `
            <img src="${data[0].flags.svg}" class="flag-img">
            <h2>${data[0].name.common}<h2/>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Capital:</h4>
                    <span>${data[0].capital[0]}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Continent:</h4>
                    <span>${data[0].continents[0]}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Common Languages:</h4>
                    <span>${Object.values(data[0].languages)
                    .toString()
                    .split(" , ")
                    .join(" , ")}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Currencies:</h4>
                    <span>${Object.keys(data[0].currencies)[0]} - ${data[0].currencies[Object.keys(data[0].currencies)].name
                } &nbsp; &nbsp; &nbsp; Symbol - ${data[0].currencies[Object.keys(data[0].currencies)].symbol
                }</span>
                </div>
            </div>

            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Population:</h4>
                    <span>${data[0].population}</span>
                </div>
            </div>

              <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Timezones:</h4>
                    <span>${data[0].timezones[0]}</span>
                </div>
            </div>
            `;
        })

        .catch(()=>{
            if(countryName.length === 0){
            result.innerHTML = `<h3>Input field can't be empty.<h3/>`
            }else{
            result.innerHTML = `<h3>Enter a valid country name.<h3/>`

            }
            
        })
});
