const BASE = `https://restcountries-v1.p.rapidapi.com`;
const ERROR = `<h5>Nothing to show, please try again...</h5>`;

$("#search-btn").click(function(e) {
  e.preventDefault();
  getData();
});

function getData() {
  $(".main").html("");
  $.ajax({
    type: "GET",
    url: handleUrl(),
    async: true,
    crossDomain: true,
    headers: {
      "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
      "x-rapidapi-key": "64bcf07ed2msh70ad2f22fea355ap132612jsn16c1cbecdd70"
    },
    success: function(response) {
      handleData(response);
    },
    error: function() {
      let error = ERROR;
      $(".main").append(error);
    }
  });
}

function handleData(response) {
  let input = $("#query").val().toLowerCase();
  let searchBy = $("option:selected").text();
  for (let i = 0; i < response.length; i++) {
    let country = response[i];
    let output = country.name.toLowerCase();

    switch (searchBy) {
      case "Name":
        output = country.name.toLowerCase();
        break;
      case "Capital":
        output = country.capital.toLowerCase();
        break;
      case "Currency":
        output = country.currencies;
        input = input.toUpperCase();
        break;
      case "Region":
        output = country.region.toLowerCase();
        break;
      case "Dialing Area":
        output = country.callingCodes;
        break;
    }

    if (output.includes(input)) {
      let countryName = `${country.name} / ${country.nativeName}`;
      let capital = country.capital;
      let languages = country.languages;
      let region = country.region;
      let callingCode = country.callingCodes;
      let currency = country.currencies;
      let population = country.population;
      let flagCode = country.alpha2Code;
      let box = `
      <div class="col-md-4">
        <div class="box">
          <p id="country-flag"><img src="https://www.countryflags.io/${flagCode}/shiny/64.png"></p>
          <p id="country-name">${countryName}</p>
            <ul id="country-data">
              <li>Capital: ${capital}</li>
              <li>Languages: ${languages}</li>
              <li>Region: ${region}</li>
              <li>Calling Code: ${callingCode}</li>
              <li>Currency: ${currency}</li>
              <li>Population: ${population.toLocaleString()}</li>
            </ul>
        </div>
      </div>`;
      $(".main").append(box);
      $(".box").css("visibility", "visible");
    }
  }
}

function handleUrl() {
  let input = $("#query").val();
  let url = `${BASE}/name/${input}`;
  let searchBy = $("option:selected").text();
  switch (searchBy) {
    case "Name":
      url = `${BASE}/name/${input}`;
      break;
    case "Capital":
      url = `${BASE}/capital/${input}`;
      break;
    case "Currency":
      url = `${BASE}/currency/${input}`;
      break;
    case "Region":
      url = `${BASE}/region/${input}`;
      break;
    case "Dialing Area":
      url = `${BASE}/callingcode/${input}`;
      break;
  }
  return url;
}