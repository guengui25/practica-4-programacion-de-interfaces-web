export type params = {
    latitude:string;
    longitude:string;
}

export type CityCoords = {
    name: string;
    latitude: number;
    longitude: number;
    country: string;
    state: string;
}

export type options = {
    temperature_2m: boolean,
    relative_humidity_2m: boolean,
    apparent_temperature: boolean,
    is_day: boolean,
    precipitation: boolean,
    rain: boolean,
    showers: boolean,
    snowfall: boolean,
    weather_code: boolean,
    cloud_cover: boolean,
    pressure_msl: boolean,
    surface_pressure: boolean,
    wind_speed_10m: boolean,
    wind_direction_10m: boolean,
    wind_gusts_10m: boolean  
}

export const option_displayNames = {
    temperature_2m: "Temperature",
    relative_humidity_2m: "Relative humidity",
    apparent_temperature: "Apparent temperature",
    is_day: "Is day",
    precipitation: "Precipitation",
    rain: "Rain",
    showers: "Showers",
    snowfall: "Snowfall",
    weather_code: "Current weather",
    cloud_cover: "Cloud cover",
    pressure_msl: "Pressure",
    surface_pressure: "Surface pressure",
    wind_speed_10m: "Wind speed",
    wind_direction_10m: "Wind direction",
    wind_gusts_10m: "Wind gusts"  
}

export const WheatherCodes = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Drizzle: Light intensity",
    53: "Drizzle: Moderate intensity",
    55: "Drizzle: Dense intensity",
    56: "Freezing Drizzle: Light intensity",
    57: "Freezing Drizzle: Dense intensity",
    61: "Rain: Slight intensity",
    63: "Rain: Moderate intensity",
    65: "Rain: Heavy intensity",
    66: "Freezing Rain: Light intensity",
    67: "Freezing Rain: Heavy intensity",
    71: "Snow fall: Slight intensity",
    73: "Snow fall: Moderate intensity",
    75: "Snow fall: Heavy intensity",
    77: "Snow grains",
    80: "Rain showers: Slight intensity",
    81: "Rain showers: Moderate intensity",
    82: "Rain showers: Violent intensity",
    85: "Snow showers: Slight intensity",
    86: "Snow showers: Heavy intensity",
    95: "Thunderstorm: Slight intensity",
    96: "Thunderstorm: Moderate intensity",
    99: "Thunderstorm: Heavy intensity",

}

export type WeatherData = {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;

    current_units: {
        time: string;
        interval: string;
        temperature_2m?: string;
        relative_humidity_2m?: string;
        apparent_temperature?: string;
        is_day?: string;
        precipitation?: string;
        rain?: string;
        showers?: string;
        snowfall?: string;
        weather_code?: string;
        cloud_cover?: string;
        pressure_msl?: string;
        surface_pressure?: string;
        wind_speed_10m?: string;
        wind_direction_10m?: string;
        wind_gusts_10m?: string;
    };

    current: {
        time: string;
        interval: number;
        temperature_2m?: number;
        relative_humidity_2m?: number;
        apparent_temperature?: number;
        is_day?: number;
        precipitation?: number;
        rain?: number;
        showers?: number;
        snowfall?: number;
        weather_code?: number;
        cloud_cover?: number;
        pressure_msl?: number;
        surface_pressure?: number;
        wind_speed_10m?: number;
        wind_direction_10m?: number;
        wind_gusts_10m?: number;
    };
};