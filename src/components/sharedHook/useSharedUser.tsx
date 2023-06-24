import { useState } from 'react'

const useSharedUser = () => {
    const [userStatus, setUserStatus] = useState<string>("");
    const [userName, setUserName] = useState<string>("");
    return {
        userStatus,
        setUserStatus,
        userName,
        setUserName
    }
}

export default useSharedUser