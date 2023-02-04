import {ReactComponent as VolumeIcon} from '../../../img/icon/volume.svg'
import * as S from './volumeStyle'

export const Volume = () => {
    return (
        <S.BlockVolume>
              <S.ContentVolume>
                <S.ImageVolume>
                  <VolumeIcon className="volume__svg" alt="volume" />
                </S.ImageVolume>
                <S.ProgressVolume>
                  <input
                    className="volume__progress-line"
                    type="range"
                    name="range"
                  />
                </S.ProgressVolume>
              </S.ContentVolume>
            </S.BlockVolume>
    )
}