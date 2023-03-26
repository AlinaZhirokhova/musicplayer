import { SearchTextDark, SearchTextLight } from '../searchStyled'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../../../redux/Slices/filterSlice'

export const SearchText = () => {
  const [ value, setValue ] = useState('')
  const { currentTheme } = useContext(ThemeContext)
  const dispatch = useDispatch()

  function handleChange(event) {
    setValue(event.target.value)
    dispatch(setSearch(event.target.value))
  }

  if (currentTheme) {
    return <SearchTextLight value={value} onChange={handleChange} type="search" placeholder="Поиск" name="search" />
  } else {
    return <SearchTextDark value={value} onChange={handleChange} type="search" placeholder="Поиск" name="search" />
  }
}
