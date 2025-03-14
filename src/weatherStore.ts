import axios from 'axios';
import { defineStore } from 'pinia'

interface WeatherData {
    location: {
        name: string;
        region: string;
        country: string;
        lat: number;
        lon: number;
        tz_id: string;
        localtime_epoch: number;
        localtime: string;
    };
    current: {
        last_updated_epoch: number;
        last_updated: string;
        temp_c: number;
        temp_f: number;
        is_day: number;
        condition: {
            text: string;
            icon: string;
            code: number;
        };
        wind_mph: number;
        wind_kph: number;
        wind_degree: number;
        wind_dir: string;
        pressure_mb: number;
        pressure_in: number;
        precip_mm: number;
        precip_in: number;
        humidity: number;
        cloud: number;
        feelslike_c: number;
        feelslike_f: number;
        vis_km: number;
        vis_miles: number;
        uv: number;
        gust_mph: number;
        gust_kph: number;
        air_quality: {
            co: number;
            no2: number;
            o3: number;
            so2: number;
            pm2_5: number;
            pm10: number;
            "us-epa-index": number;
            "gb-defra-index": number;
        };
    };
}


interface WeatherState {
    city: string;
    description: string;
    feeling: string;
    data: WeatherData;
    temp_unit: string;
    precip_unit: string;
    wind_unit: string;
    pollutants: any;
    aqiValues: any;
    AQI: number;
}
export const useWeatherStore = defineStore('weather', {
    state: (): WeatherState => ({

        city: "Agadir",
        description: "partially cloudy",
        feeling: "feels like 21",
        data: {
            location: {
                name: "",
                region: "",
                country: "",
                lat: 0,
                lon: 0,
                tz_id: "",
                localtime_epoch: 0,
                localtime: "",
            },
            current: {
                last_updated_epoch: 0,
                last_updated: "",
                temp_c: 0,
                temp_f: 0,
                is_day: 0,
                condition: {
                    text: "",
                    icon: "",
                    code: 0,
                },
                wind_mph: 0,
                wind_kph: 0,
                wind_degree: 0,
                wind_dir: "",
                pressure_mb: 0,
                pressure_in: 0,
                precip_mm: 0,
                precip_in: 0,
                humidity: 0,
                cloud: 0,
                feelslike_c: 0,
                feelslike_f: 0,
                vis_km: 0,
                vis_miles: 0,
                uv: 0,
                gust_mph: 0,
                gust_kph: 0,
                air_quality: {
                    co: 0,
                    no2: 0,
                    o3: 0,
                    so2: 0,
                    pm2_5: 0,
                    pm10: 0,
                    "us-epa-index": 0,
                    "gb-defra-index": 0,
                },
            },
        },
        temp_unit: "°C",
        precip_unit: 'mm',
        wind_unit: "kph",
        pollutants: {},
        aqiValues: [],
        AQI: 0,
    }),
    getters: {
        getCity: (state): string => state.city,
        getTempUnit: (state): string => state.temp_unit,
        getTemperature: (state): number => state.temp_unit == "°C" ? state.data.current.temp_c : state.data.current.temp_f,
        getSelectedTemperatureUnit: (state): string => state.temp_unit,
        getSelectedPrecipitation_unit: (state): string => state.precip_unit,
        getConditionText: (state): string => state.data.current.condition.text,
        getConditionIcon: (state): string => state.data.current.condition.icon,
        getHumidity: (state): number => state.data.current.humidity,
        getPrecipitation: (state): number => state.precip_unit == "mm" ? state.data.current.precip_mm : state.data.current.precip_in,
        getWind: (state): number => state.wind_unit == "kph" ? state.data.current.wind_kph : state.data.current.wind_mph,
        getWindUnit: (state): string => state.wind_unit,
        getFeelingLike: (state): number => state.temp_unit == "°C" ? state.data.current.feelslike_c : state.data.current.feelslike_f,
        getAQI: (state): number => state.AQI,
        getAqiColor: (state) => {      
            if (state.AQI <= 50) return "#00E400"; // Green
            if (state.AQI <= 100) return "#FFFF00"; // Yellow
            if (state.AQI <= 150) return "#FF7E00"; // Orange
            if (state.AQI <= 200) return "#FF0000"; // Red
            if (state.AQI <= 300) return "#8F3F97"; // Purple
            return "#7E0023"; // Maroon (Hazardous)
        }
    },
    actions: {
        fetchCity() {
            axios.get('http://ip-api.com/json').then(res => { this.$state.city = res.data.city, this.fetchCurrentWeatherData() });
        },
        fetchCurrentWeatherData() {
            axios.get(`http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=${this.$state.city}&aqi=yes`)
            .then(res => {
                this.$state.data = res.data,
                console.log('d = ', res.data)
                this.$state.pollutants  = res.data.current.air_quality;
                this.caculateAQI();
            });
        },
        caculateAQI() {
            const breakpoints: Record<string, Array<[number, number, number, number]>> = {
                pm2_5: [
                    [0, 12.0, 0, 50], [12.1, 35.4, 51, 100], [35.5, 55.4, 101, 150],
                    [55.5, 150.4, 151, 200], [150.5, 250.4, 201, 300], [250.5, 500.4, 301, 500]
                ],
                pm10: [
                    [0, 54, 0, 50], [55, 154, 51, 100], [155, 254, 101, 150],
                    [255, 354, 151, 200], [355, 424, 201, 300], [425, 604, 301, 500]
                ],
                o3: [
                    [0, 54, 0, 50], [55, 70, 51, 100], [71, 85, 101, 150],
                    [86, 105, 151, 200], [106, 200, 201, 300], [201, 604, 301, 500]
                ],
                co: [
                    [0, 4.4, 0, 50], [4.5, 9.4, 51, 100], [9.5, 12.4, 101, 150],
                    [12.5, 15.4, 151, 200], [15.5, 30.4, 201, 300], [30.5, 50.4, 301, 500]
                ],
                no2: [
                    [0, 53, 0, 50], [54, 100, 51, 100], [101, 360, 101, 150],
                    [361, 649, 151, 200], [650, 1249, 201, 300], [1250, 2049, 301, 500]
                ],
                so2: [
                    [0, 35, 0, 50], [36, 75, 51, 100], [76, 185, 101, 150],
                    [186, 304, 151, 200], [305, 604, 201, 300], [605, 1004, 301, 500]
                ],
            };

            // Convert CO from µg/m³ to ppm (approximate conversion)
            this.$state.pollutants.co /= 1000;

            // Function to calculate AQI for a given pollutant
            const calculateAqiForPollutant = (value: number, bp: Array<[number, number, number, number]>) => {
                for (const [C_low, C_high, I_low, I_high] of bp) {
                    if (value >= C_low && value <= C_high) {
                        return Math.round(((I_high - I_low) / (C_high - C_low)) * (value - C_low) + I_low);
                    }
                }
                return 0;
            };

            // Calculate AQI for each pollutant
            Object.keys(breakpoints).forEach((key) => {
                this.$state.aqiValues[key] = calculateAqiForPollutant(this.$state.pollutants[key as keyof typeof this.$state.pollutants], breakpoints[key]);
            });

            // The final AQI is the highest AQI among all pollutants
            this.$state.AQI = Math.max(...Object.values(this.$state.aqiValues).map(value => Number(value)));
         
        },


    }
})
