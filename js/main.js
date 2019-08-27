$("#search-btn").click(function(e) {
  e.preventDefault();
  getCountry();
});

function getCountry() {
  $("#result").html("");
  let country = $("#query").val();
  let settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://restcountries-v1.p.rapidapi.com/name/${country}`,
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
      "x-rapidapi-key": "64bcf07ed2msh70ad2f22fea355ap132612jsn16c1cbecdd70"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response)
    handleData(response);
  });
}

function handleData(response) {
  let country = response[0];
  let countryName = country.name;
  let nativeName = country.nativeName;
  let capital = country.capital;
  let languages = country.languages;
  let borders = country.borders;
  let region = country.region;
  let callingCode = country.callingCodes;
  let currencies = country.currencies;
  let population = country.population;
  let timezones = country.timezones;
  let flagCode = country.alpha2Code;
  let result = 
  `
  <ul>
    <li>Country: ${countryName}</li>
    <li>Native Name: ${nativeName}</li>
    <li>Capital: ${capital}</li>
    <li>Languages: ${languages}</li>
    <li>Region: ${region}</li>
    <li>Borders: ${borders}</li>
    <li>Calling Code: ${callingCode}</li>
    <li>Currencies: ${currencies}</li>
    <li>Population: ${population}</li>
    <li>Timezones: ${timezones}</li>
  </ul>`
  $('#result').append(result);
}