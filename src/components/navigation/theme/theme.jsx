import {ThemeIconSvgDark,ThemeIconSvgLight} from '../navigationStyle.jsx'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

export const Theme = () => {
    const {currentTheme, setCurrentTheme} = useContext(ThemeContext)
    function changeTheme () {
        setCurrentTheme(theme => !theme)
    }

    if (currentTheme) {
       return <ThemeIconSvgLight onClick={changeTheme}/> 
    } else {
       return <ThemeIconSvgDark onClick={changeTheme}/>
    }

}