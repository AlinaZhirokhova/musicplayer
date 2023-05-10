import * as S from './repeatStyle.jsx'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

export const Repeat = () => {
  const { currentTheme } = useContext(ThemeContext)

  if (currentTheme) {
    return (
      <S.RepeatPlayer>
        <S.RepeatIconSvgLight alt="repeat"/>
      </S.RepeatPlayer>
    )
  } else {
    return (
      <S.RepeatPlayer>
        <S.RepeatIconSvgDark alt="repeat" />
      </S.RepeatPlayer>
    )
  }
}
