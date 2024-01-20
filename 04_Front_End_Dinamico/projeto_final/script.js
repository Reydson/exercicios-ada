const key = "1562a8c142ef4944f71d2543961d6236";
const form = document.querySelector("#form_busca");
const inputCidade = document.querySelector("#input_cidade");

const dados = document.querySelector("#dados");
const nameCity = document.querySelector("#name_city");
const temp = document.querySelector("#temp");
const tempMin = document.querySelector("#temp_min");
const tempMax = document.querySelector("#temp_max");
const humidity = document.querySelector("#humdity");
const pressure = document.querySelector("#pressure");
const descriptWeather = document.querySelector("#descript_weather");
const descriptIcon = document.querySelector("#descript_icon");
const windDeg = document.querySelector("#wind_deg");
const windSpeed = document.querySelector("#wind_speed");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputCidade.value}&units=metric&lang=pt_br&appid=${key}`
  )
    .then((response) => response.json())
    .then((json) => {
      nameCity.innerHTML = json.name
      temp.innerHTML = `${json.main.temp.toFixed(0)} °C`
      tempMin.innerHTML = `${json.main.temp_min.toFixed(0)} °C`
      tempMax.innerHTML = `${json.main.temp_max.toFixed(0)} °C`
      humidity.innerHTML = `${json.main.humidity} %`
      pressure.innerHTML = `${json.main.pressure} Pa`
      descriptWeather.innerHTML = json.weather[0].description
      descriptIcon.src = `https://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`
      windDeg.innerHTML = json.wind.deg
      windSpeed.innerHTML = json.wind.speed
      dados.classList.remove('d-none');
    })
    .catch((error) => {
      alert("Ocorreu um erro");
      dados.classList.add('d-none');
    });
});
