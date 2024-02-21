const apiKey = 'a8ce9bd9b01902318a715c79a9bdf2a6';
const city = 'Nacogdoches'; 

//function to fetch tomorrow's weather data from the API
async function getTomorrowWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`);
        const data = await response.json();

        
        const tomorrowWeather = data.list[8];

        return tomorrowWeather;
    } catch (error) {
        console.error('Error fetching tomorrow\'s weather data:', error);
    }
}

function updateTomorrowWeather() {
    const tomorrowTempElement = document.getElementById('tomorrow-temp');
    const tomorrowIconElement = document.getElementById('tomorrow-icon');
    const tomorrowDescElement = document.getElementById('tomorrow-desc');

    getTomorrowWeather().then(tomorrowWeather => {
        if (tomorrowWeather) {
            const temperature = tomorrowWeather.main.temp;
            const iconCode = tomorrowWeather.weather[0].icon;
            const description = tomorrowWeather.weather[0].description;

            tomorrowTempElement.textContent = `${Math.round(temperature)}°F`;
            tomorrowIconElement.src = `https://openweathermap.org/img/w/${iconCode}.png`;
            tomorrowIconElement.alt = description;
            tomorrowDescElement.textContent = description;
        }
    });
}

document.addEventListener('DOMContentLoaded', updateTomorrowWeather);
