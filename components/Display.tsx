import { FunctionComponent } from "preact";

import { Signal } from "@preact/signals";
import { options,option_displayNames,WeatherData,WheatherCodes } from "../types.ts";

type DisplayProps = {
    weather: Signal<WeatherData | undefined>; // Es de tipo any ya que es parametrizable y el objeto varía según las opciones seleccionadas
    city: Signal<string>;
    options: Signal<options>;
}

const Display:FunctionComponent<DisplayProps> = ({weather,city,options}) => {

    const weatherData = weather.value;

    if(weatherData === undefined || city.value === "" ) return (<></>);

    return (
        <div class="Display">
            <h1>☁️ Weather in {city.value} ☁️</h1>
            <div class = "Data">
                <p>Latitude: {weatherData.latitude}</p>
                <p>Longitude: {weatherData.longitude}</p>
                {/*<p>Generation Time (ms): {weatherData.generationtime_ms}</p>*/}
                {/*<p>UTC Offset (seconds): {weatherData.utc_offset_seconds}</p>*/}
                <p>Timezone: {weatherData.timezone}</p>
                {/*<p>Timezone Abbreviation: {weatherData.timezone_abbreviation}</p>*/}
                <p>Elevation: {weatherData.elevation}</p>
            </div>

            {Object.values(options.value).some((value) => value === true) && 

            <div class="Selected_options">
                <h2>Selected Options</h2>
                    {Object.keys(options.value).map((key) => {
                            if(options.value[key] === true){

                                if(key === "is_day"){
                                    return <p>{option_displayNames[key]}: {weatherData.current[key] ? "Yes" : "No"}</p>
                                }

                                if(key === "weather_code"){
                                    return <p>{option_displayNames[key]}: {WheatherCodes[weatherData.current[key]]}</p>
                                }

                                return <p>{option_displayNames[key]}: {weatherData.current[key]} {weatherData.current_units[key]}</p>
                            }
                        })
                    }
            </div>
            }
        </div>
    );
}

export default Display;