import React, { createContext, useState } from "react";

type ImageColors = {
    primary: string;
    secondary: string;
}

interface GradientContextProps {
    colors: ImageColors;
    previousColors: ImageColors;
    setMainColors: (colors: ImageColors) => void,
    setPreviousMainColors: (colors: ImageColors) => void
}

export const GradientContext = createContext({} as GradientContextProps);

export const GradientProvider = ({ children }: { children: JSX.Element }) => {

    const [colors, setColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent'
    });

    const [previousColors, setPreviousColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent'
    });

    const setMainColors = (colors: ImageColors) => {
        setColors(colors);
    }

    const setPreviousMainColors = (colors: ImageColors) => {
        setPreviousColors(colors);
    }

    return (
        <GradientContext.Provider value={{
            colors,
            previousColors,
            setMainColors,
            setPreviousMainColors
        }}>
            {children}
        </GradientContext.Provider>
    )

}