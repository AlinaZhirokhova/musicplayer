import * as S from './nextStyle'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { useDispatch } from 'react-redux'
import { nextTrack, repeatTrack } from '../../../redux/Slices/trackSlice'

export const Next = ({isRepeat}) => {
  const {currentTheme} = useContext(ThemeContext)
  const dispatch = useDispatch()
  // const { trackId } = useSelector((state) => state.id)

  function handleClick () {
    // dispatch(nextTrack())
    if (isRepeat) {
      dispatch(repeatTrack())
      console.log('fff')
    } else {
      dispatch(nextTrack())
    }
    
  }
  
  if (currentTheme) {
    return (
      <S.NextPlayer onClick={handleClick}>
        <S.NextIconSvgLight alt="next"/>
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
