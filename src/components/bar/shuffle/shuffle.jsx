import * as S from './shuffleStyle.jsx'
import { Icon } from '../barStyled.jsx'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

export const Shuffle = () => {
  const {currentTheme} = useContext(ThemeContext)

  if (currentTheme) {
    return (
      <Icon>
        <S.ShuffleIconSvgLight alt="shuffle" />
      </Icon>
    )
  } else {
    return (
      <Icon>
        <S.ShuffleIconSvgDark alt="shuffle" />
      </Icon>
    )
  }
}
