import { SearchTextDark, SearchTextLight } from '../searchStyled'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

export const SearchText = () => {
    const { currentTheme } = useContext(ThemeContext)

    if (currentTheme) {
       return <SearchTextLight type="search" placeholder="Поиск" name="search" /> 
    } else {
       return <SearchTextDark type="search" placeholder="Поиск" name="search" />
    }

}