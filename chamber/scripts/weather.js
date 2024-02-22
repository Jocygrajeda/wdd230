const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#today-desc');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Nacogdoches,us&units=imperial&appid=a8ce9bd9b01902318a715c79a9bdf2a6';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    updateTomorrowWeather();

}

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

async function getDayAfterTomorrowWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`);
        const data = await response.json();

        const dayAfterTomorrowWeather = data.list[16]; // Adjust the index as needed

        return dayAfterTomorrowWeather;
    } catch (error) {
        console.error('Error fetching the day after tomorrow\'s weather data:', error);
    }
}

function updateDayAfterTomorrowWeather() {
    const dayAfterTomorrowTempElement = document.getElementById('dayAfterTomorrow-temp');
    const dayAfterTomorrowIconElement = document.getElementById('dayAfterTomorrow-icon');
    const dayAfterTomorrowDescElement = document.getElementById('dayAfterTomorrow-desc');

    getDayAfterTomorrowWeather().then(dayAfterTomorrowWeather => {
        if (dayAfterTomorrowWeather) {
            const temperature = dayAfterTomorrowWeather.main.temp;
            const iconCode = dayAfterTomorrowWeather.weather[0].icon;
            const description = dayAfterTomorrowWeather.weather[0].description;

            dayAfterTomorrowTempElement.textContent = `${Math.round(temperature)}°F`;
            dayAfterTomorrowIconElement.src = `https://openweathermap.org/img/w/${iconCode}.png`;
            dayAfterTomorrowIconElement.alt = description;
            dayAfterTomorrowDescElement.textContent = description;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {

    updateTomorrowWeather();
    updateDayAfterTomorrowWeather();
});