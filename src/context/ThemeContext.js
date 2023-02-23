import { createContext, useState } from "react"

export const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {
    const [currentTheme, setCurrentTheme] = useState(false)

    return(
        <ThemeContext.Provider value={{currentTheme, setCurrentTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}