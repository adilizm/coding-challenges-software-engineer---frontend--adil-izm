# Weather App

A simple weather application built using Vue 3, TypeScript, and Vanilla CSS. This app fetches real-time weather data using the [WeatherAPI](https://www.weatherapi.com/) and displays weather conditions for a selected city.

## Features

- Search for weather data by city name
- Display current temperature, weather conditions, humidity, and wind speed
- Show hourly and daily forecasts
- User-friendly UI with smooth transitions

## Tech Stack

- **Vue 3.5** - Frontend framework
- **TypeScript 5** - Strongly-typed JavaScript
- **Vanilla CSS** - Custom styling without utility frameworks
- **WeatherAPI** - Fetch weather data

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/adilizm/coding-challenges-software-engineer---frontend--adil-izm.git
   cd coding-challenges-software-engineer---frontend--adil-izm
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file in the root directory and add your WeatherAPI key: you can use this key => b903c8cd95e04c02b27184316251103 (making it easy for you)** 
   ```
   VITE_API_KEY=your_api_key_here
   ```

4. **Run the app locally:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

## Usage

- Start typing a city name in the search box.
- Select a city from the dropdown.
- View real-time weather details and forecast.

## API Integration

This app retrieves weather data from [WeatherAPI](https://www.weatherapi.com/). You need to sign up for an API key to use it.

Example API request:
```bash
https://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=CityName&days=7
```

## Project Structure

```
weather-app/
│-- src/
│   │-- components/    # Vue components
│   │-- store/         # State management
│   │-- App.vue        # Main page
│   │-- assets/        # Static files svgs
│   │-- main.ts        # App entry point
│-- public/            # Static assets
│-- .env               # API key configuration
│-- package.json       # Dependencies
│-- README.md          # Project documentation
```

## Contribution

Feel free to fork this repository, create a new branch, and submit a pull request with your improvements.

Made with ❤️ by Adil Izm.

