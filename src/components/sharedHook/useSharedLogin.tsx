import { useState } from 'react'

const useSharedLogin = () => {
    const [showLogin, setShowLogin] = useState(false);
    return {
        showLogin,
        setShowLogin
    }
}

export default useSharedLogin