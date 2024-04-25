import { FunctionComponent } from "preact";

import { useEffect, useState } from "preact/hooks";
import { useSignal } from "@preact/signals";

import { CityCoords, WeatherData, options } from "../types.ts"

import OptionSelect from "../components/OptionSelect.tsx";
import Display from "../components/Display.tsx";
import InputCity from "../components/InputCity.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";

import Emojis from "./Emojis.tsx";

const WeatherIsland:FunctionComponent = () => {

    const City = useSignal<string>("Madrid"); // Senal para almacenar la ciudad
    const Weather = useSignal<WeatherData | undefined>(undefined); // Senal para almacenar los datos del tiempo

    // ERRORES
    const [error, setError] = useState<string>("");

    // Iniciamos con todas las opciones desactivadas
    const options = useSignal<options> ({
        temperature_2m: false,
        relative_humidity_2m: false,
        apparent_temperature: false,
        is_day: false,
        precipitation: false,
        rain: false,
        showers: false,
        snowfall: false,
        weather_code: false,
        cloud_cover: false,
        pressure_msl: false,
        surface_pressure: false,
        wind_speed_10m: false,
        wind_direction_10m: false,
        wind_gusts_10m: false
    })

    // Funcion que se ejecuta cuando cambia la ciudad
    useEffect(() => {
        if(City.value !== "" ){fetchWeather(City.value);}},
        [City.value]
    );

    const fetchWeather = async (city:string) => {
        
        const response_cities = await fetch("/API/" + city);
        const city_response:CityCoords[] = await response_cities.json();

        console.log(city_response);

        if(typeof city_response === "string"){
            setError(city_response);
            return;
        }else{
            setError("");
        }

        //Saco las latitudes y longitudes separadas por comas
        const latitudes = city_response.map((city) => city.latitude).join(",");
        const longitudes = city_response.map((city) => city.longitude).join(",");
        
        // Pido todos los datos del tiempo para las ciudades
        const url = "https://api.open-meteo.com/v1/forecast"
        +`?latitude=${latitudes}`
        +`&longitude=${longitudes}`
        +`&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m`
        
        const response_weather = await fetch(url);
        const weather_data = await response_weather.json();

        console.log(weather_data);

        City.value = city_response[0].name;

        Weather.value = weather_data;

        console.log(options.value)
    }

    return (
        <>
        <Emojis/>
            <div class ="WeatherIsland">
                <h1>☁️ Weather in Cities ☁️</h1>
                
                <InputCity city={City}/> {/* Componente para introducir la ciudad que modifica la signal ciudad*/}

                <OptionSelect options={options}/> {/* Componente para seleccionar las opciones que modifica la signal opciones*/}
                
            </div>
            {error !== "" && <div class="WeatherIsland"><h1 class="Error">Error: {error}</h1></div>}
            {error === "" && City.value !== "" &&
            <div class="WeatherIsland">
                {IS_BROWSER && <Display weather={Weather} city={City} options={options}/>}
            </div>
            }
        </>
    );
};

export default WeatherIsland;