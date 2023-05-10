import * as S from './prevStyle'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { useDispatch } from 'react-redux'
import { prevTrack } from '../../../redux/Slices/trackSlice'

export const Prev = () => {
  const { currentTheme } = useContext(ThemeContext)
  const dispatch = useDispatch()

  function handleClick () {
    
    dispatch(prevTrack())
  }

  if (currentTheme) {
    return (
      <S.PrevPlayer>
        <S.PrevIconSvgLight alt="prev" />
      </S.PrevPlayer>
    )
  } else {
    return (
      <S.PrevPlayer onClick={handleClick}>
        <S.PrevIconSvgDark alt="prev" />
      </S.PrevPlayer>
    )
}
}