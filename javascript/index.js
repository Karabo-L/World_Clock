function updateTime() {
  //Johannesburg
  let johannesburgElement = document.querySelector("#Johannesburg");
  let johannesburgDateElement = johannesburgElement.querySelector(".date");
  let johannesburgTimeElement = johannesburgElement.querySelector(".time");
  let johannesburgTime = moment();

  johannesburgDateElement.innerHTML = johannesburgTime.format("MMMM Do YYYY");
  johannesburgTimeElement.innerHTML = johannesburgTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //LosAngeles
  let LosAngelesElement = document.querySelector("#Los-Angeles");
  let LosAngelesDateElement = LosAngelesElement.querySelector(".date");
  let LosAngelesTimeElement = LosAngelesElement.querySelector(".time");
  let LosAngelesTime = moment().tz("America/Los_Angeles");

  LosAngelesDateElement.innerHTML = LosAngelesTime.format("MMMM Do YYYY");
  LosAngelesTimeElement.innerHTML = LosAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
