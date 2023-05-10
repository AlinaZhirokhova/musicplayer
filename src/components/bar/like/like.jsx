import * as S from './likeStyle.jsx'
import { Icon } from '../barStyled.jsx'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

export const Like = () => {
  const { currentTheme } = useContext(ThemeContext)

  if (currentTheme) {
    return (
      <Icon>
        <S.LikeIconSvgLight alt="like" />
      </Icon>
    )
  } else {
    return (
      <Icon>
        <S.LikeIconSvgDark alt="like" />
      </Icon>
    )
  }
}