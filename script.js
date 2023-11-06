const getWeather = ()=> {

  let cityName = document.getElementById("cityInput").value;
  let apiKey = "9044ef5da2b2aec7e85c6eafd1f3284b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  if(cityName ==""){
    weatherInfo.innerHTML=`<p class="bg-danger w-75 p-3 mt-4 fs-5">Please Enter Your CityName</p>`
}else{

  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    let icon =`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
          let weatherInfo = document.getElementById("weatherInfo");
          cityInput.value = ""
          weatherInfo.innerHTML = ""
          weatherInfo.innerHTML =`<div class="flex">
          <div>
          <p class="temp"> ${Math.round(data.main.temp )} °C </p>
          <img src=${icon} class="img-fliud img-responsive" alt="weather icon "></img>
          </div>
          <div class="para">
          <h3 class="text-light mt-4 w-50 ">Weather in ${data.name}</h3>
                                  <h1 class="">Weather: ${data.weather[0].description} </h1>
                                  <h1 class="">Humidity: ${data.main.humidity}% </h1>
                                  <h1 class="">Wind Speed: ${data.wind.speed} m/s </h1>
                                  </div>
                                  </div>
                                  `;
      })
      .catch(error => {
          console.log("Error fetching weather data:", error);
          let weatherInfo = document.getElementById("weatherInfo");
          weatherInfo.innerHTML = `<p class="bg-danger w-75 p-3>Error fetching weather data. Please try again.</p>`;
      });
}

}