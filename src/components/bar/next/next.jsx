import * as S from './nextStyle'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

export const Next = () => {
  const {currentTheme} = useContext(ThemeContext)
  
  if (currentTheme) {
    return (
      <S.NextPlayer>
        <S.NextIconSvgLight alt="next" />
      </S.NextPlayer>
    )
  } else {
    return (
      <S.NextPlayer>
        <S.NextIconSvgDark alt="next" />
      </S.NextPlayer>
    )
}
}
