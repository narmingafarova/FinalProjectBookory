import { useState } from 'react'

const useSharedCanvas = () => {
    const [showCanvas, setShowCanvas] = useState(false);
    return {
        showCanvas,
        setShowCanvas
    }
}

export default useSharedCanvas