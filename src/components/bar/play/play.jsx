import {ReactComponent as PlayIcon} from '../../../img/icon/play.svg'
import * as S from './playStyle'

export const Play = () => {
  return (
    <S.PlayPlayer>
      <PlayIcon className="player__btn-play-svg" alt="play"/>
    </S.PlayPlayer>
  )
}
