import * as S from './volumeStyle'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

export const Volume = () => {
  const { currentTheme } = useContext(ThemeContext)
  let styleImg = {
    stroke: currentTheme ? '#fffffff' : '#B1B1B1',
  }

  if (currentTheme) {
    return (
      <S.BlockVolume>
        <S.ContentVolume>
          <S.ImageVolume>
            <S.VolumeIconSvg style={styleImg} alt="volume" />
          </S.ImageVolume>
          <S.ProgressVolume>
            <S.ProgressLineVolumeLight type="range" name="range" />
          </S.ProgressVolume>
        </S.ContentVolume>
      </S.BlockVolume>
    )
  } else {
    return (
      <S.BlockVolume>
        <S.ContentVolume>
          <S.ImageVolume>
            <S.VolumeIconSvg style={styleImg} alt="volume" />
          </S.ImageVolume>
          <S.ProgressVolume>
            <S.ProgressLineVolumeDark type="range" name="range" />
          </S.ProgressVolume>
        </S.ContentVolume>
      </S.BlockVolume>
    )
  }
}
