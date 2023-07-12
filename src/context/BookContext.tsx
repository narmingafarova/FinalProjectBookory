import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const BookContext = createContext<any>(null);

export const BookProvider = ({ children }: any) => {
    const [books, setBooks] = useState<any>([])

    // https://mocki.io/v1/c5fcaa80-749c-4484-83a8-49b1bb083081
    useEffect(() => {
        axios.get("https://mocki.io/v1/b0e94587-d1e4-48c6-a540-ca0f37cbc903")
            .then(res => setBooks(res.data));
    }, [])

    return (
        <BookContext.Provider value={[books, setBooks]}>
            {children}
        </BookContext.Provider>
    )
}