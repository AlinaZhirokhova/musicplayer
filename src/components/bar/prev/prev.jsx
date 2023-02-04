import {ReactComponent as PrevIcon} from '../../../img/icon/prev.svg'
import * as S from './prevStyle'

export const Prev = () => {
  return (
    <S.PrevPlayer>
      <PrevIcon className="player__btn-prev-svg" alt="prev"/>
    </S.PrevPlayer>
  )
}
