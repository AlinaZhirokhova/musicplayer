import {ReactComponent as VolumeIcon} from '../../../img/icon/volume.svg'

export const Volume = () => {
    return (
        <div className="bar__volume-block volume">
              <div className="volume__content">
                <div className="volume__image">
                  <VolumeIcon className="volume__svg" alt="volume" />
                </div>
                <div className="volume__progress _btn">
                  <input
                    className="volume__progress-line_btn"
                    type="range"
                    name="range"
                  />
                </div>
              </div>
            </div>
    )
}