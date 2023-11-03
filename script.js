  const getWeather = ()=> {
  let cityName = document.getElementById("cityInput").value;
  let apiKey = "9044ef5da2b2aec7e85c6eafd1f3284b"; // Replace with your OpenWeatherMap API key
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  // Make API request
  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
          // Process the data and display it
          let weatherInfo = document.getElementById("weatherInfo");
          weatherInfo.innerHTML = `<h2 class="bg-warning mt-4 w-75  p-3">Weather in ${data.name}</h2>
                                  <p class="bg-primary w-75 p-3">Temperature: ${Math.round(data.main.temp - 273.15)} °C 🌡</p>
                                  <p class="bg-danger w-75 p-3">Weather: ${data.weather[0].description} ☁</p>
                                  <p class="bg-info w-75 p-3">Humidity: ${data.main.humidity}% 💧</p>
                                  <p class="bg-success w-75 p-3">Wind Speed: ${data.wind.speed} m/s 🌬</p>`;
      })
      .catch(error => {
          console.log("Error fetching weather data:", error);
          let weatherInfo = document.getElementById("weatherInfo");
          weatherInfo.innerHTML = `<p>Error fetching weather data. Please try again.</p>`;
      });
}