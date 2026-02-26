// Your OpenWeatherMap API Key
const API_KEY = '66777ec6c8cd3c5f674420186a82e3ec';  // Replace with your actual API key
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Function to fetch weather data
// TODO: Convert this function to async/await
async function getWeather(city) {
    showLoading();

    // Disable search button while loading
    searchBtn.disabled = true;
    searchBtn.textContent = 'Searching...';

    const url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await axios.get(url);
        displayWeather(response.data);

    } catch (error) {
        console.error('Error:', error);

        if (error.response && error.response.status === 404) {
            showError('City not found. Please check the spelling and try again.');
        } else {
            showError('Something went wrong. Please try again later.');
        }

    } finally {
        // Re-enable button after request finishes
        searchBtn.disabled = false;
        searchBtn.textContent = 'Search';
    }
}
// TODO: Create showError function
function showError(message) {
    document.getElementById('weather-display').innerHTML = `
        <div class="loading-container">
            <p>${message}</p>
        </div>
    `;
}
// Function to display weather data
function displayWeather(data) {
    // Extract the data we need
    const cityName = data.name;
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    
    // Create HTML to display
    const weatherHTML = `
        <div class="weather-info">
            <h2 class="city-name">${cityName}</h2>
            <img src="${iconUrl}" alt="${description}" class="weather-icon">
            <div class="temperature">${temperature}°C</div>
            <p class="description">${description}</p>
        </div>
    `;
    
    // Put it on the page
    document.getElementById('weather-display').innerHTML = weatherHTML;
    cityInput.focus();
}

// Call the function when page loads
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('weather-display').innerHTML = `
        <p class="welcome">🌤️ Welcome! Enter a city name and click search to see the weather.</p>
    `;
});
// Get references to HTML elements
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');

// Function to handle search
function handleSearch() {
    const city = cityInput.value.trim();

    // Validate input is not empty
    if (city === '') {
        showError();
        return;
    }

    // Call getWeather with city name
    getWeather(city);

    // Optional: clear input after search
    cityInput.value = '';
}
function handleSearch() {
    const city = cityInput.value.trim();

    if (!city) {
        showError('Please enter a city name.');
        cityInput.focus();
        return;
    }

    if (city.length < 2) {
        showError('City name too short.');
        cityInput.focus();
        return;
    }

    getWeather(city);
    cityInput.value = '';
}

// Click event listener for search button
searchBtn.addEventListener('click', handleSearch);

// Enter key support
cityInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        handleSearch();
    }
});

function showLoading() {
    const loadingHTML = `
        <div class="loading-container">
            <div class="spinner"></div>
            <p>Loading weather data...</p>
        </div>
    `;

    document.getElementById('weather-display').innerHTML = loadingHTML;
}