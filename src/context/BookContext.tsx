import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const BookContext = createContext<any>(null);

export const BookProvider = ({ children }: any) => {
    const [books, setBooks] = useState<any>([])

    useEffect(() => {
        axios.get("https://mocki.io/v1/58ff8361-f6e9-4373-9b79-344513e718df")
            .then(res => setBooks(res.data));
    }, [])

    return (
        <BookContext.Provider value={[books, setBooks]}>
            {children}
        </BookContext.Provider>
    )
}