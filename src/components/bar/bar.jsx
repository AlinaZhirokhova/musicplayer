import * as S from './barStyled'
import { useState } from 'react'
import { Progress } from './progress/progress'
import { Volume } from './volume/volume'
import { Controls } from './controls/controls'
import { Contain } from './contain/contain'
import { Like } from './like/like'
import { Dislike } from './dislike/dislike'
import { SkeletonBar } from '../skeletonBar/skeletonBar'

export const Bar = () => {
  const [isLoading, setIsLoading] = useState(true)
  setTimeout(() => {setIsLoading(false)}, 2000)

  return (
    <S.BarContainer>
      <S.ContentBar>
        <Progress />
        <S.PlayerBlockBar>
          <S.PlayerPlayerBar>
            <Controls />
            <S.PlayerTrackPlay>
              {
                isLoading
                ? <SkeletonBar/>
                : <Contain />
              }
              <S.LikeDisTrackPlay>
                <Like />
                <Dislike />
              </S.LikeDisTrackPlay>
            </S.PlayerTrackPlay>
          </S.PlayerPlayerBar>
          <Volume />
        </S.PlayerBlockBar>
      </S.ContentBar>
    </S.BarContainer>
  )
}
