function getAllCountires() {
  $.ajax({
    type: "GET",
    url: "https://restcountries-v1.p.rapidapi.com/all",
    async: true,
    crossDomain: true,
    headers: {
      "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
      "x-rapidapi-key": "64bcf07ed2msh70ad2f22fea355ap132612jsn16c1cbecdd70"
    },
    success: function(response) {
      createDataList(response);
    }
  });
}

function createDataList(response) {
  $("#countries").html("");
  for (let i = 0; i < response.length; i++) {
    let country = response[i].name;
    let option = `<option value="${country}"/>`;
    $("#countries").append(option);
  }
}

$("#query").click(function() {
  let searchBy = $("option:selected").text();
  if (searchBy === "Name") {
    getAllCountires();
  } else {
     $("#countries").html("");
   }
});