import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const BookContext = createContext<any>(null);

export const BookProvider = ({ children }: any) => {
    const [books, setBooks] = useState<any>([])

    // https://mocki.io/v1/58ff8361-f6e9-4373-9b79-344513e718df
    useEffect(() => {
        axios.get("https://mocki.io/v1/c5fcaa80-749c-4484-83a8-49b1bb083081")
            .then(res => setBooks(res.data));
    }, [])

    return (
        <BookContext.Provider value={[books, setBooks]}>
            {children}
        </BookContext.Provider>
    )
}