import * as S from './repeatStyle.jsx'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

export const Repeat = (onRepeatClick, isRepeat) => {
  const { currentTheme } = useContext(ThemeContext)

  if (currentTheme) {
    return (
      <S.RepeatPlayer>
        
        <S.RepeatIconSvgLight alt="repeat" onClick={onRepeatClick}/>
      </S.RepeatPlayer>
    )
  } else {
    return (
      <S.RepeatPlayer>
        { isRepeat ? <S.RepeatIconSvgDarkActive onClick={onRepeatClick} alt="repeat"/> : <S.RepeatIconSvgDark onClick={onRepeatClick} alt="repeat"/>}
        {/* <S.RepeatIconSvgDark alt="repeat" /> */}
      </S.RepeatPlayer>
    )
  }
}
