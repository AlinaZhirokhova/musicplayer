import * as S from './nextStyle'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { useDispatch } from 'react-redux'
import { nextTrack } from '../../../redux/Slices/trackSlice'

export const Next = () => {
  const {currentTheme} = useContext(ThemeContext)
  const dispatch = useDispatch()

  function handleClick () {
    dispatch(nextTrack())
  }
  
  if (currentTheme) {
    return (
      <S.NextPlayer>
        <S.NextIconSvgLight alt="next" />
      </S.NextPlayer>
    )
  } else {
    return (
      <S.NextPlayer onClick={handleClick}>
        <S.NextIconSvgDark alt="next" />
      </S.NextPlayer>
    )
}
}
