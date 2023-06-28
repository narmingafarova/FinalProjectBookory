import { createContext, useState } from "react";

export const LangContext = createContext<any>([])

interface propsType {
    children: any
}

export const LangProvider = (props: propsType) => {
    const localLang = localStorage.getItem('lang');
    const [lang, setLang] = useState<any>(localLang);
    return (
        <LangContext.Provider value={[lang, setLang]}>
            {props.children}
        </LangContext.Provider>
    )
}