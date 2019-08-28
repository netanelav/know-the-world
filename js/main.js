$("#search-btn").click(function(e) {
  e.preventDefault();
  getCountry();
});

function getCountry() {
  $(".main").html("");
  let country = $("#query").val();

  $.ajax({
    type: "GET",
    url: `https://restcountries-v1.p.rapidapi.com/name/${country}`,
    async: true,
    crossDomain: true,
    headers: {
      "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
      "x-rapidapi-key": "64bcf07ed2msh70ad2f22fea355ap132612jsn16c1cbecdd70"
    },
    success: function(response) {
      console.log(response);
      handleData(response);
    },
    error: function(response) {
      alert("error");
    }
  });
}

function handleData(response) {
  for (let i = 0; i < response.length; i++) {
    let country = response[i];
    let countryName = `${country.name} / ${country.nativeName}`;
    let capital = country.capital;
    let languages = country.languages;
    let region = country.region;
    let callingCode = country.callingCodes;
    let currencies = country.currencies;
    let population = country.population;
    let timezones = country.timezones;
    let flagCode = country.alpha2Code;
    let box = `
    <div class="col-4">
      <div class="box">
        <p id="country-flag"><img src="https://www.countryflags.io/${flagCode}/shiny/64.png"></p>
        <p id="country-name">${countryName}</p>
        <ul id="country-data">
          <li>Capital: ${capital}</li>
          <li>Languages: ${languages}</li>
          <li>Region: ${region}</li>
          <li>Calling Code: ${callingCode}</li>
          <li>Currency: ${currencies}</li>
          <li>Population: ${population}</li>
          <li>Timezone: ${timezones}</li>
        </ul>
      </div>
    </div>`;
    $(".main").append(box);
    $(".box").css("visibility", "visible");
  }
}