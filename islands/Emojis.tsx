import { FunctionComponent } from "preact";

import { useEffect, useState } from "preact/hooks";

type Cloud = {
    left: number;
    top: number;
}

type State = {
    clouds: Cloud[];
}

const Emojis: FunctionComponent= () => {

    const [state, setState] = useState<State>({ clouds: [] });

    const generateClouds = () => {
        const numClouds = 7;

        const newClouds: Cloud[] = [];

        for (let i = 0; i < numClouds; i++) {
            const cloud: Cloud = {
                left: Math.random() * 80,
                top: Math.random() * 80
            };
            newClouds.push(cloud);
        }

        setState({ clouds: newClouds });
    };

    useEffect(() => {
        generateClouds();
    }, []);

    return (
    <>
        {state.clouds.map((cloud, index) => (
                    <div
                    key={index}
                    class="emoji-cloud"
                    style={{
                        left: `${cloud.left}%`,
                        top: `${cloud.top}%`,
                        pointerEvents: 'none' // Desactivar eventos de puntero
                    }}
                >
                        ☁️
                    </div>
        ))}
    </>
    )

}

export default Emojis;