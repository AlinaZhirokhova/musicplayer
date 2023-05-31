import * as S from './repeatStyle.jsx'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

export const Repeat = ({ isRepeat, setIsRepeat }) => {
  const { currentTheme } = useContext(ThemeContext)

  function changeRepeat() {
    setIsRepeat(!isRepeat)
  }

  if (currentTheme) {
    return (
      <S.RepeatPlayer>
        {isRepeat ? (
          <S.RepeatIconSvgLightActive alt="repeat" onClick={changeRepeat} />
        ) : (
          <S.RepeatIconSvgLight alt="repeat" onClick={changeRepeat} />
        )}
      </S.RepeatPlayer>
    )
  } else {
    return (
      <S.RepeatPlayer>
        {isRepeat ? (
          <S.RepeatIconSvgDarkActive alt="repeat" onClick={changeRepeat} />
        ) : (
          <S.RepeatIconSvgDark alt="repeat" onClick={changeRepeat} />
        )}
      </S.RepeatPlayer>
    )
  }
}
