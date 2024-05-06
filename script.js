function fetchAndDisplayWeather() {
    const apiKey = 'bd5e378503939ddaee76f12ad7a97608';
    const cityInput = document.getElementById('cityInput').value; // Get the city from input field
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const weatherContainer = document.getElementById('weather-container');
            weatherContainer.innerHTML = '';
            const temperature = Math.round(data.main.temp - 273.15);
            const weatherDescription = data.weather[0].description;
            const cityElement = document.createElement('h2');
            cityElement.textContent = `Weather in ${cityInput}:`;
            const temperatureElement = document.createElement('p');
            temperatureElement.textContent = `Temperature: ${temperature}°C`;
            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = `Description: ${weatherDescription}`;
            weatherContainer.appendChild(cityElement);
            weatherContainer.appendChild(temperatureElement);
            weatherContainer.appendChild(descriptionElement);
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
        });
}
