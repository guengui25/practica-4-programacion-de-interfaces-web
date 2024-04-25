import { FunctionComponent } from "preact";
import { Signal } from "@preact/signals";

import { options,option_displayNames } from "../types.ts";

type OptionSelectProps = {
    options: Signal<options>;
}

const OptionSelect: FunctionComponent<OptionSelectProps> = ({ options }) => {


    return (
        <div class = "OptionSelect">

            <h4>Options:</h4>
                {Object.keys(options.value).map((key) => {
                    return (
                            <label for={key}>
                                <input type="checkbox" id={key} checked={options.value[key]} 
                                onChange={() => {options.value = {...options.value, [key]: !options.value[key]};}} />
                            {option_displayNames[key]}</label>
                    );
                })}
        </div>
    );
};

export default OptionSelect;