import * as S from './volumeStyle'

export const Volume = () => {
    return (
        <S.BlockVolume>
              <S.ContentVolume>
                <S.ImageVolume>
                  <S.VolumeIconSvg alt="volume" />
                </S.ImageVolume>
                <S.ProgressVolume>
                  <S.ProgressLineVolume
                    type="range"
                    name="range"
                  />
                </S.ProgressVolume>
              </S.ContentVolume>
            </S.BlockVolume>
    )
}