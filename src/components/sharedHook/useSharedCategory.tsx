import { useState } from 'react'

const useSharedCategory = () => {
    const [activeCat, setActiveCat] = useState<number | null>()
    return {
        activeCat,
        setActiveCat
    }
}

export default useSharedCategory