import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const BookContext = createContext<any>(null);

export const BookProvider = ({ children }: any) => {
    const [books, setBooks] = useState<any>([])

    useEffect(() => {
        axios.get("https://mocki.io/v1/f9f2520f-1dca-4c2a-b002-11a3734c7067")
            .then(res => setBooks(res.data));
    }, [])

    return (
        <BookContext.Provider value={[books, setBooks]}>
            {children}
        </BookContext.Provider>
    )
}