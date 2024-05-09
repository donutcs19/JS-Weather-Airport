const KELVIN = 273;
const key = "82005d27a116c2880c8f0fcb866998a0";

//Location Access
const iconE = document.querySelector(".weather-icon");
const temperatureE = document.querySelector(".temperature-value");
const descriptionE = document.querySelector(".temperature-description");
const locationE = document.querySelector(".location");
const notifyE = document.querySelector(".notification");

const weather = {
  city: "-",
  country: "-",
  iconId: "unknown",
  description: "-",
  temperature: {
    unit: "celsius",
    value: 0,
  },
};

const displayWeather = () => {
  iconE.innerHTML = `<img src="icons/${weather.iconId}.png">`;
  temperatureE.innerHTML = `<p>${weather.temperature.value}°<span>C<span><p>`;
  descriptionE.innerHTML = `<p>${weather.description}<p>`;
  locationE.innerHTML = `<p>${weather.city}, ${weather.country}<p> `;
};



const getWeather = async (latitude, longitude) => {
  const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${key}`;
  const data = await (await fetch(api)).json();
  // console.log({ data });

  weather.temperature.value = Math.floor(data.main.temp - KELVIN);
  weather.description = data.weather[0].description;
  weather.iconId = data.weather[0].icon;
  weather.city = data.name;
  weather.country = data.sys.country;
  displayWeather();
};

const setPosition = (position) => {
  const { latitude, longitude } = position.coords;
  getWeather(latitude, longitude);
};

const showError = (error) => {
  notifyE.style.display = "block";
  notifyE.innerHTML = `<p>${error.message}</p>`;
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
  notifyE.getElementsByClassName.display = "block";
  notifyE.innerHTML = "<p>Error to access Geolocation</p>";
}
// getWeather()

const celsiusTofahrenheit = (celsius) => Math.floor((celsius *9) / 5 + 32)
temperatureE.addEventListener('click' , () => {
  if (!weather.temperature.value) return

  if(weather.temperature.unit === 'celsius') {
    const fahrenheit = celsiusTofahrenheit(weather.temperature.value)
    temperatureE.innerHTML =  `<p>${fahrenheit}°<span>F<span><p>`
    weather.temperature.unit = 'fahrenheit'
  }else{
    temperatureE.innerHTML =  `<p>${weather.temperature.value}°<span>C<span><p>`
    weather.temperature.unit = 'celsius'
  }
})

//CNX Airport
const iconCNX = document.getElementById('CNX-icon')
const temperatureCNX = document.getElementById('CNX-temperature')
const descriptionCNX = document.getElementById('CNX-description')
const locationCNX = document.getElementById('CNX-location')

const weatherCNX = {
  city: "-",
  country: "-",
  iconId: "unknown",
  description: "-",
  temperature: {
    unit: "celsius",
    value: 0,
  },
};

const displayWeatherCNX = () => {
  iconCNX.innerHTML = `<img src="icons/${weatherCNX.iconId}.png">`
  temperatureCNX.innerHTML = `<p>${weatherCNX.temperature.value}°<span>C<span><p>`
  descriptionCNX.innerHTML = `<p>${weatherCNX.description}<p>`
  locationCNX.innerHTML = `<p>${weatherCNX.city}, ${weatherCNX.country}<p> `
  
}

const latitudeCNX = 18.768850
const longitudeCNX = 98.968101

const getWeatherCNX = async ()  => {
  const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitudeCNX}&lon=${longitudeCNX}&exclude={part}&appid=${key}`
  const data = await (await fetch(api)).json()
  // console.log({ data });

  weatherCNX.temperature.value = Math.floor(data.main.temp - KELVIN)
  weatherCNX.iconId = data.weather[0].icon
  weatherCNX.description = data.weather[0].description
  weatherCNX.city = data.name
  weatherCNX.country = data.sys.country

displayWeatherCNX()
}
getWeatherCNX()

const celsiusTofahrenheitCNX = (celsius) => Math.floor((celsius *9) / 5 + 32)
temperatureCNX.addEventListener('click' , () => {
  if (!weatherCNX.temperature.value) return

  if(weatherCNX.temperature.unit === 'celsius') {
    const fahrenheit = celsiusTofahrenheitCNX(weatherCNX.temperature.value)
    temperatureCNX.innerHTML =  `<p>${fahrenheit}°<span>F<span><p>`
    weatherCNX.temperature.unit = 'fahrenheit'
  }else{
    temperatureCNX.innerHTML =  `<p>${weatherCNX.temperature.value}°<span>C<span><p>`
    weatherCNX.temperature.unit = 'celsius'
  }
})

//DMK Airport
const iconDMK = document.getElementById('DMK-icon')
const temperatureDMK = document.getElementById('DMK-temperature')
const descriptionDMK = document.getElementById('DMK-description')
const locationDMK = document.getElementById('DMK-location')

const weatherDMK = {
  city: "-",
  country: "-",
  iconId: "unknown",
  description: "-",
  temperature: {
    unit: "celsius",
    value: 0,
  },
};

const displayWeatherDMK = () => {
  iconDMK.innerHTML = `<img src="icons/${weatherDMK.iconId}.png">`
  temperatureDMK.innerHTML = `<p>${weatherDMK.temperature.value}°<span>C<span><p>`
  descriptionDMK.innerHTML = `<p>${weatherDMK.description}<p>`
  locationDMK.innerHTML = `<p>${weatherDMK.city}, ${weatherDMK.country}<p> `
  
}

const latitudeDMK = 13.915794
const longitudeDMK = 100.603738

const getWeatherDMK = async ()  => {
  const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitudeDMK}&lon=${longitudeDMK}&exclude={part}&appid=${key}`
  const data = await (await fetch(api)).json()
  // console.log({ data })

  weatherDMK.temperature.value = Math.floor(data.main.temp - KELVIN)
  weatherDMK.iconId = data.weather[0].icon
  weatherDMK.description = data.weather[0].description
  weatherDMK.city = data.name
  weatherDMK.country = data.sys.country
  
displayWeatherDMK()
}
getWeatherDMK()

const celsiusTofahrenheitDMK = (celsius) => Math.floor((celsius *9) / 5 + 32)
temperatureDMK.addEventListener('click' , () => {
  if (!weatherDMK.temperature.value) return

  if(weatherDMK.temperature.unit === 'celsius') {
    const fahrenheit = celsiusTofahrenheit(weatherDMK.temperature.value)
    temperatureDMK.innerHTML =  `<p>${fahrenheit}°<span>F<span><p>`
    weatherDMK.temperature.unit = 'fahrenheit'
  }else{
    temperatureDMK.innerHTML =  `<p>${weatherDMK.temperature.value}°<span>C<span><p>`
    weatherDMK.temperature.unit = 'celsius'
  }
})


//BKK
const iconBKK = document.getElementById('BKK-icon')
const temperatureBKK = document.getElementById('BKK-temperature')
const descriptionBKK = document.getElementById('BKK-description')
const locationBKK = document.getElementById('BKK-location')

const weatherBKK = {
  city: "-",
  country: "-",
  iconId: "unknown",
  description: "-",
  temperature: {
    unit: "celsius",
    value: 0,
  },
};

const displayWeatherBKK = () => {
  iconBKK.innerHTML = `<img src="icons/${weatherBKK.iconId}.png">`
  temperatureBKK.innerHTML = `<p>${weatherBKK.temperature.value}°<span>C<span><p>`
  descriptionBKK.innerHTML = `<p>${weatherBKK.description}<p>`
  locationBKK.innerHTML = `<p>${weatherBKK.city}, ${weatherBKK.country}<p> `
  
}

const latitudeBKK = 13.694852
const longitudeBKK = 100.751335

const getWeatherBKK = async ()  => {
  const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitudeBKK}&lon=${longitudeBKK}&exclude={part}&appid=${key}`
  const data = await (await fetch(api)).json()
  // console.log({ data })

  weatherBKK.temperature.value = Math.floor(data.main.temp - KELVIN)
  weatherBKK.iconId = data.weather[0].icon
  weatherBKK.description = data.weather[0].description
  weatherBKK.city = data.name
  weatherBKK.country = data.sys.country
  
  displayWeatherBKK()
}
getWeatherBKK()

const celsiusTofahrenheitBKK = (celsius) => Math.floor((celsius *9) / 5 + 32)
temperatureBKK.addEventListener('click' , () => {
  if (!weatherBKK.temperature.value) return

  if(weatherBKK.temperature.unit === 'celsius') {
    const fahrenheit = celsiusTofahrenheit(weatherBKK.temperature.value)
    temperatureBKK.innerHTML =  `<p>${fahrenheit}°<span>F<span><p>`
    weatherBKK.temperature.unit = 'fahrenheit'
  }else{
    temperatureBKK.innerHTML =  `<p>${weatherBKK.temperature.value}°<span>C<span><p>`
    weatherBKK.temperature.unit = 'celsius'
  }
})

//NNT
const iconNNT = document.getElementById('NNT-icon')
const temperatureNNT = document.getElementById('NNT-temperature')
const descriptionNNT = document.getElementById('NNT-description')
const locationNNT = document.getElementById('NNT-location')

const weatherNNT = {
  city: "-",
  country: "-",
  iconId: "unknown",
  description: "-",
  temperature: {
    unit: "celsius",
    value: 0,
  },
};

const displayWeatherNNT = () => {
  iconNNT.innerHTML = `<img src="icons/${weatherNNT.iconId}.png">`
  temperatureNNT.innerHTML = `<p>${weatherNNT.temperature.value}°<span>C<span><p>`
  descriptionNNT.innerHTML = `<p>${weatherNNT.description}<p>`
  locationNNT.innerHTML = `<p>${weatherNNT.city}, ${weatherNNT.country}<p> `
  
}

const latitudeNNT = 18.802989
const longitudeNNT = 100.784427

const getWeatherNNT = async ()  => {
  const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitudeNNT}&lon=${longitudeNNT}&exclude={part}&appid=${key}`
  const data = await (await fetch(api)).json()
  // console.log({ data })

  weatherNNT.temperature.value = Math.floor(data.main.temp - KELVIN)
  weatherNNT.iconId = data.weather[0].icon
  weatherNNT.description = data.weather[0].description
  weatherNNT.city = data.name
  weatherNNT.country = data.sys.country
  
  displayWeatherNNT()
}
getWeatherNNT()

const celsiusTofahrenheitNNT = (celsius) => Math.floor((celsius *9) / 5 + 32)
temperatureNNT.addEventListener('click' , () => {
  if (!weatherNNT.temperature.value) return

  if(weatherNNT.temperature.unit === 'celsius') {
    const fahrenheit = celsiusTofahrenheit(weatherNNT.temperature.value)
    temperatureNNT.innerHTML =  `<p>${fahrenheit}°<span>F<span><p>`
    weatherNNT.temperature.unit = 'fahrenheit'
  }else{
    temperatureNNT.innerHTML =  `<p>${weatherNNT.temperature.value}°<span>C<span><p>`
    weatherNNT.temperature.unit = 'celsius'
  }
})