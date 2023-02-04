import {ReactComponent as DislikeIcon} from '../../../img/icon/dislike.svg'
import * as S from './dislikeStyle.jsx'

export const Dislike = () => {
  return (
    <S.DislikeTrackPlay>
      <DislikeIcon className="track-play__dislike-svg" alt="dislike" />
    </S.DislikeTrackPlay>
  )
}
