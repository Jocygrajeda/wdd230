const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');

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
    
    let desc = data.weather[0].description;
    
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    
    captionDesc.textContent = `${desc}. Humidity: ${humidity}%. Wind Speed: ${windSpeed} mph.`;
    
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
}