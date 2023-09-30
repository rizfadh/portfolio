import { useEffect, useState } from "react";

export default function useQuotes() {
    const [quotes, setQuotes] = useState({})

    useEffect(() => {
        const getQuotes = async () => {
            const response = await fetch('https://api.quotable.io/random?maxLength=100')
            const data = await response.json()
            setQuotes(data)
        }

        getQuotes()

    }, [])

    return quotes
}