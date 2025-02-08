import { createContext, useContext, useEffect, useRef, useState } from "react"

const InfoContext = createContext()

export const useInfoContext = () => useContext(InfoContext)

export const InfoProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("profile")) || null)
    const [update, setUpdate] = useState(false)

    const scroll = useRef();
    useEffect(() => {
        scroll.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        });
    }, [update]);


     const value = {
        currentUser, setCurrentUser, scroll,
        update, setUpdate
    }

 
    return (
        <InfoContext.Provider value={value}>
            {children}
        </InfoContext.Provider>
    )
}