import * as S from './nextStyle'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { useDispatch } from 'react-redux'
import { nextTrack } from '../../../redux/Slices/trackSlice'

export const Next = ({ isShuffle }) => {
  const { currentTheme } = useContext(ThemeContext)
  const dispatch = useDispatch()

  function handleClick() {
    dispatch(nextTrack(isShuffle ? 'shuffle' : 'default'))
    // при нажатии на кнопку след трек он включается, проверяя активный ли шафл
  }

  if (currentTheme) {
    return (
      <S.NextPlayer onClick={handleClick}>
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
