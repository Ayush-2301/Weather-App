// Api key
const api_key = "0361ce493839a94b588748cf356b0f43";
// event listener
const searchbtn = document.querySelector(".search-button");
searchbtn.addEventListener("click", main);
document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    main();
  }
});
// main function
function main() {
  city = document.querySelector(".search").value;
  if (city == "") return;
  // fetching data
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`;
  const weather_image = document.querySelector(".weather-image");
  const weather_data = document.querySelector(".weather-Data");
  const weather_Discription = document.querySelector(".weather-Discription");
  const more_info = document.querySelector(".more-info");
  const humidity = document.querySelector(".humidity");
  const wind = document.querySelector(".wind");
  const body = document.querySelector("body");
  async function getData() {
    try {
      const response = await fetch(api);
      const data = await response.json();
      console.log(data.weather[0].main);

      // variables

      // switch case to append required weather icon
      switch (data.weather[0].main) {
        case "Clear":
          body.classList.remove("inital");
          body.style.backgroundImage = ` url("./image/clear.jpg")`;
          weather_image.innerHTML = `<div class="clears" icon="sunny">
          <span class="sun"></span>
          </div>`;

          break;

        case "Clouds":
          body.classList.remove("inital");
          body.style.backgroundImage = `url("./image/cloudy.jpg")`;
          weather_image.innerHTML = `<div class="clouds" icon="cloudy">
            <span class="cloud"></span>
            <span class="cloud"></span>
            </div>`;

          break;

        case "Snow":
          body.classList.remove("inital");
          body.style.backgroundImage = `url("./image/snow.jpg")`;
          weather_image.innerHTML = `<div class="snow" icon="snowy">
              <span class="snowman"></span>
              <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              </ul>
              </div>`;

          break;

        case "Rain":
        case "Thunderstorm":
          body.classList.remove("inital");
          body.style.backgroundImage = `url("./image/rainy.jpg")`;
          weather_image.innerHTML = `<div class="rain" icon="stormy">
                  <span class="cloud"></span>
                  <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  </ul>
                  </div>`;

          break;

        case "Smoke":
        case "Mist":
        case "Haze":
          body.classList.remove("inital");
          body.style.backgroundImage = `url("./image/haze.jpg")`;
          weather_image.innerHTML = ` <div icon="haze" data-label="Haze">
                        <span class="sun_haze"></span>
                        <span class="cloud_haze"></span>
                        <span class="cloud_haze1"></span>
                        <span class="cloud_haze2"></span>
                        <span class="cloud_haze3"></span>
                        </div>`;

          break;

        default:
          weather_image.innerHTML = ``;
          break;
      }
      // appending more data
      weather_data.innerHTML = `${parseInt(
        data.main.temp
      )} <span class="mx-1 absolute top-0 text-base">°C</span>`;
      weather_Discription.textContent = data.weather[0].description;
      more_info.classList.add("mb-6", "my-2");
      humidity.innerHTML = `<div class="flex items-center mx-2">
                          <i class="fa-sharp fa-solid fa-water text-3xl text-textcolor"></i>
                          </div>
                          <div class="text-textcolor">
                          <div class="humidity-Data text-xl font-semibold"></div>
                          <p class="text-base">Humidity</p>
                          </div>`;
      wind.innerHTML = `<div class="flex items-center mx-2">
                          <i class="fa-sharp fa-solid fa-wind text-3xl text-textcolor"></i>
                          </div>
                          <div class="text-textcolor">
                          <div class="wind-Data text-xl font-semibold"></div>
                          <p class="text-bases">Wind Speed</p>
                          </div>`;
      const humidity_Data = document.querySelector(".humidity-Data");
      const wind_Data = document.querySelector(".wind-Data");
      humidity_Data.innerHTML = `${parseInt(data.main.humidity)}%`;
      wind_Data.innerHTML = `${parseInt(data.wind.speed)}Km/h`;
    } catch (error) {
      body.style.backgroundImage = "";
      body.classList.add("inital");
      weather_data.innerHTML = ``;
      weather_Discription.textContent = "";
      more_info.classList.remove("mb-6", "my-2");
      humidity.innerHTML = ``;
      wind.innerHTML = ``;
      weather_image.innerHTML = ` <img src="./image/error.png"  width="200px" alt=""  />
      <div class="text-3xl ">Oops! Wrong Location</div>`;
    }
  }
  getData();
}
