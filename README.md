🌤️ SkyFetch – Weather Dashboard
A beautiful, interactive weather dashboard that provides real-time weather data and a 5-day forecast for any city in the world.
✨ Features
🔍 Search weather for any city worldwide
🌡️ Current temperature, weather condition, and icon
📊 5-day weather forecast with daily predictions
💾 Recent searches saved using localStorage
🔄 Auto-loads last searched city
📱 Fully responsive design (mobile + desktop)
⚡ Fast and efficient API calls with Axios
🎯 Clean OOP architecture using JavaScript prototypes
🛠️ Technologies Used
HTML5
CSS3 (Flexbox, Grid, Animations)
JavaScript (ES6+)
Axios for API requests
OpenWeatherMap API
localStorage for data persistence
🎯 Concepts Demonstrated
Prototypal Inheritance (Object-Oriented JavaScript)
Async/Await & Promises
Promise.all() for concurrent API calls
DOM Manipulation
Event Handling
Error Handling & Loading States
localStorage API
Responsive Web Design
🚀 Live Demo
👉 [Add your Vercel deployment URL here]
📸 Screenshots
🔎 Search Weather
Add screenshot here
🌤️ Current Weather Display
Add screenshot here
📊 5-Day Forecast
Add screenshot here
💻 Local Setup
1️⃣ Clone the repository
git clone https://github.com/thanzeellatheef/skyfetch-weather-dashboard.git
2️⃣ Navigate to the project folder
cd skyfetch-weather-dashboard
3️⃣ Get a free API key from
👉 https://openweathermap.org/api
4️⃣ Add your API key in app.js
const app = new WeatherApp('YOUR_API_KEY_HERE');
5️⃣ Open index.html in your browser
🔐 Optional: Secure API Key
Create a config.js file:
const CONFIG = {
  API_KEY: 'YOUR_API_KEY_HERE'
};
Update index.html:
<script src="config.js"></script>
<script src="app.js"></script>
Update app.js:
const app = new WeatherApp(CONFIG.API_KEY);
Add to .gitignore:
config.js
📂 .gitignore (Recommended)
node_modules/
.env
.env.local
config.js
.DS_Store
Thumbs.db
.vscode/
.idea/
*.log
📝 License
This project is licensed under the MIT License – you are free to use and modify it.
👨‍💻 Author
Thanzeel Latheef
GitHub: https://github.com/thanzeellatheef
LinkedIn: www.linkedin.com/in/thanzeel-latheef-al-shafaq-b47986364
🙏 Acknowledgments
Weather data by OpenWeatherMap API
Weather icons by OpenWeatherMap
Built as part of Frontend Web Development Advanced Course