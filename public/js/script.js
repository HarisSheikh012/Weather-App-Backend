function ChangeName() {
  document.getElementById("demo").innerHTML = "Haris Sheikh";
}
const cityName = document.getElementById("cityName");
const SubButton = document.getElementById("submitButton");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
async function GetWeather(event) {
  event.preventDefault();
  let cityvalue = cityName.value;
  if (cityvalue === "") {
    city_name.innerText = "Plz Write the name before search";
  } else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&units=metric&appid=eeb417f54966d47927dcf7b75abea486`;
      const response = await fetch(url);
      const data = await response.json();
      const arrdata = [data];
      console.log(arrdata);
      city_name.innerHTML = `${arrdata[0].name} , ${arrdata[0].sys.country}`;
      temp.innerText = `${arrdata[0].main.temp}`;
      const temp_mode = arrdata[0].weather[0].main;
      if (temp_mode == "Clear") {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color:#eccc68'></i>";
      } else if (temp_mode == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style='color:#f1f2f6'></i>";
      } else if (temp_mode == "Rain") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud-rain' style='color:#a4b0be'></i>";
      } else if (temp_mode == "Smoke") {
        temp_status.innerHTML =
          "<i class='fas fa-smoking' style='color:#eccc68'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color:#eccc68'></i>";
      }
    } catch {
      city_name.innerText = "Plz enter the name properly";
    }
  }
}
SubButton.addEventListener("click", GetWeather);
