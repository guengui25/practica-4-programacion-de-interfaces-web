import { FunctionComponent } from "preact";
import { Signal } from "@preact/signals";

type OptionSelectProps = {
    city: Signal<string>;
}

const InputCity: FunctionComponent<OptionSelectProps> = ({ city }) => {

    return (
        <div class="InputCity">
            <label for="city">City: </label>
            <input id="City_input" type="text" value={city.value}/>
        <button onClick={() => {
            const city_input = document.getElementById("City_input") as HTMLInputElement;
            city.value = city_input.value;  } } >Check Weather</button>
        </div>
    );
}

export default InputCity;