import * as S from './shuffleStyle.jsx'
import { Icon } from '../barStyled.jsx'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

export const Shuffle = ({ isShuffle, setIsShuffle }) => {
  const {currentTheme} = useContext(ThemeContext)

  const changeShuffle = () => {
    setIsShuffle(e => !e) // вот тут не совсем поняла, почему нужно изменить то, что в скобках... !isShuffle указать нельзя? есть разница какая-то получается?
  };

  if (currentTheme) {
    return (
      <Icon>
        {isShuffle ? (
          <S.ShuffleIconSvgLightActive alt="repeat" onClick={changeShuffle} />
        ) : (
          <S.ShuffleIconSvgLight alt="repeat" onClick={changeShuffle} />
        )}
      </Icon>
    )
  } else {
    return (
      <Icon>
        {isShuffle ? (
          <S.ShuffleIconSvgDarkActive alt="repeat" onClick={changeShuffle} />
        ) : (
          <S.ShuffleIconSvgDark alt="repeat" onClick={changeShuffle} />
        )}
      </Icon>
    )
  }
}
