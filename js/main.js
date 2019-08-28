$("#search-btn").click(function(e) {
  e.preventDefault();
  getCountry();
});

function getCountry() {
  $("#country-flag").html("");
  $("#country-name").html("");
  $("#country-data").html("");
  let country = $("#query").val();
  let settings = {
    async: true,
    crossDomain: true,
    url: `https://restcountries-v1.p.rapidapi.com/name/${country}`,
    method: "GET",
    headers: {
      "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
      "x-rapidapi-key": "64bcf07ed2msh70ad2f22fea355ap132612jsn16c1cbecdd70"
    }
  };

  $.ajax(settings).done(function(response) {
    console.log(response);
    handleData(response);
  });
}

function handleData(response) {
  let country = response[0];
  let countryName = `${country.name} / ${country.nativeName}`;
  let capital = country.capital;
  let languages = country.languages;
  // let borders = country.borders;
  let region = country.region;
  let callingCode = country.callingCodes;
  let currencies = country.currencies;
  let population = country.population;
  let timezones = country.timezones;

  let flagCode = country.alpha2Code;
  let flag = `<img src="https://www.countryflags.io/${flagCode}/shiny/64.png">`;
  $("#country-flag").append(flag);
  $("#country-name").append(countryName);

  let data = `<ul>
    <li>Capital: ${capital}</li>
    <li>Languages: ${languages}</li>
    <li>Region: ${region}</li>
    <li>Calling Code: ${callingCode}</li>
    <li>Currency: ${currencies}</li>
    <li>Population: ${population}</li>
    <li>Timezone: ${timezones}</li>
  </ul>`;
  $("#country-data").append(data);
  $(".box").css("visibility", "visible");
}

{
  /* <li>Borders: ${borders}</li> */
}
// function displayAllFlags() {

// }
