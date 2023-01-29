import * as S from './styled'
import { Progress } from './progress/progress'
import { Volume } from './volume/volume'
import { Controls } from './controls/controls'
import { Contain } from './contain/contain'
import { Like } from './like/like'
import { Dislike } from './dislike/dislike'

export const Bar = () => {
    return (
      <S.BarContainer>
        <div className="bar__content">
          <Progress />
          <div className="bar__player-block">
            <div className="bar__player player">
              <Controls />
              <div className="player__track-play track-play">
                <Contain />
                <div className="track-play__like-dis">
                  <Like />
                  <Dislike />
                </div>
              </div>
            </div>
            <Volume />
          </div>
        </div>
      </S.BarContainer>
    )
}