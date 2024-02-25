const cityName = document.querySelector('.city');
const weather = document.querySelector('.weather');
const temp = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const weatherIcon = document.querySelector('.weather-icon')
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const error = document.querySelector('.error');

const apiKey = '2d7a0552b390de00e3c467c9fa3256ea';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';


async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    error.style.display = 'block';
    weather.style.display = 'none';
  } else {
    let data = await response.json();

    cityName.innerHTML = data.name;
    temp.innerHTML = `${Math.round(data.main.temp)} °c`;
    humidity.innerHTML = `${data.main.humidity}%`;
    wind.innerHTML = `${data.wind.speed} Km/h`;

    if (data.weather[0].main == 'Clouds') {
      weatherIcon.src = 'images/clouds.png'
    }
    else if (data.weather[0].main == 'Clear') {
      weatherIcon.src = 'images/clear.png'
    }
    else if (data.weather[0].main == 'Rain') {
      weatherIcon.src = 'images/rain.png'
    }
    else if (data.weather[0].main == 'Drizzle') {
      weatherIcon.src = 'images/drizzle.png'
    }
    else if (data.weather[0].main == 'Mist') {
      weatherIcon.src = 'images/mist.png'
    }
    else if (data.weather[0].main == 'Snow') {
      weatherIcon.src = 'images/snow.png'
    }
    weather.style.display = 'block';
    error.style.display = 'none';

  }
}

searchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value);
})
