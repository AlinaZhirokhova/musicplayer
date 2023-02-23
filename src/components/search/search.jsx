import * as S from './searchStyled'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { SearchText } from '../search/placeholder/placeholder'

export const Search = () => {
  const { currentTheme } = useContext(ThemeContext)
  let styleImg = {
    stroke: currentTheme ? '#000000' : '#ffffff'
  }

  return (
    <S.SearchContainer>
      <S.SearchIconSvg style={styleImg}/>
      <SearchText/>
    </S.SearchContainer>
  )
}
