function updateTime() {
  //Johannesburg
  let johannesburgElement = document.querySelector("#Johannesburg");
  if (johannesburgElement) {
    let johannesburgDateElement = johannesburgElement.querySelector(".date");
    let johannesburgTimeElement = johannesburgElement.querySelector(".time");
    let johannesburgTime = moment();

    johannesburgDateElement.innerHTML = johannesburgTime.format("MMMM Do YYYY");
    johannesburgTimeElement.innerHTML = johannesburgTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //LosAngeles
  let LosAngelesElement = document.querySelector("#Los-Angeles");
  if (LosAngelesElement) {
    let LosAngelesDateElement = LosAngelesElement.querySelector(".date");
    let LosAngelesTimeElement = LosAngelesElement.querySelector(".time");
    let LosAngelesTime = moment().tz("America/Los_Angeles");

    LosAngelesDateElement.innerHTML = LosAngelesTime.format("MMMM Do YYYY");
    LosAngelesTimeElement.innerHTML = LosAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Dubai
  let DubaiElement = document.querySelector("#Dubai");
  if (DubaiElement) {
    let DubaiDateElement = DubaiElement.querySelector(".date");
    let DubaiTimeElement = DubaiElement.querySelector(".time");
    let DubaiTime = moment().tz("Asia/Dubai");

    DubaiDateElement.innerHTML = DubaiTime.format("MMMM Do YYYY");
    DubaiTimeElement.innerHTML = DubaiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTZ = event.target.value;
  if (cityTZ === "current") {
    cityTZ = moment.tz.guess();
  }
  let cityName = cityTZ.replace("_", " ").split("/")[1];

  let cityTime = moment().tz(cityTZ);
  let citiesElemet = document.querySelector("#cities");

  citiesElemet.innerHTML = `<div class="city" >
                        <div>
                            <h2>${cityName} </h2>
                            <div class= "date">${cityTime.format(
                              "MMMM Do YYYY"
                            )}</div>
                        </div>
                        <div class="time">${cityTime.format("h:mm:ss")} 
                                   <small>${cityTime.format("A")}</small>
                         </div>
                  </div>
                  <a href="/">All Cities</a> `;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
