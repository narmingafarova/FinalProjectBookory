import { createContext, useState } from "react";

export const ThemeContext = createContext<any>([])

interface propsType {
    children: any
}

export const ThemeProvider = (props: propsType) => {
    const localMode = localStorage.getItem('mode') ?? "light";
    const [mode, setMode] = useState<any>(localMode);
    return (
        <ThemeContext.Provider value={[mode, setMode]}>
            {props.children}
        </ThemeContext.Provider>
    )
}