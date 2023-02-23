import * as S from './prevStyle'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

export const Prev = () => {
  const { currentTheme } = useContext(ThemeContext)

  if (currentTheme) {
    return (
      <S.PrevPlayer>
        <S.PrevIconSvgLight alt="prev" />
      </S.PrevPlayer>
    )
  } else {
    return (
      <S.PrevPlayer>
        <S.PrevIconSvgDark alt="prev" />
      </S.PrevPlayer>
    )
}
}