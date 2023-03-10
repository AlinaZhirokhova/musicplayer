import { createContext, useState } from "react"

export const PlayingContext = createContext()

export const PlayingContextProvider = ({children}) => {
    const [isPlaying, setIsPlaying] = useState(false)

    return(
        <PlayingContext.Provider value={{isPlaying, setIsPlaying}}>
            {children}
        </PlayingContext.Provider>
    )
}