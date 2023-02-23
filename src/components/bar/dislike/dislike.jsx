import * as S from './dislikeStyle.jsx'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

export const Dislike = () => {
  const { currentTheme } = useContext(ThemeContext)

  if (currentTheme) {
    return (
      <S.DislikeTrackPlay>
        <S.DislikeIconSvgLight alt="dislike" />
      </S.DislikeTrackPlay>
    )
  } else {
    return (
      <S.DislikeTrackPlay>
        <S.DislikeIconSvgDark alt="dislike" />
      </S.DislikeTrackPlay>
    )
  }
}
