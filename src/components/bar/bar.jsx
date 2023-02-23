import * as S from './barStyled'
import { useState } from 'react'
import { Progress } from './progress/progress'
import { Volume } from './volume/volume'
import { Controls } from './controls/controls'
import { Contain } from './contain/contain'
import { Like } from './like/like'
import { Dislike } from './dislike/dislike'
import { SkeletonBar } from '../skeletonBar/skeletonBar'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export const Bar = () => {
  const [isLoading, setIsLoading] = useState(true)
  setTimeout(() => {setIsLoading(false)}, 2000)

  const { currentTheme } = useContext(ThemeContext)
  let styleBar = {
    background: currentTheme ? '#ffffff' : 'rgba(28, 28, 28, 0.5)'
  }

  return (
    <S.BarContainer style={styleBar}>
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
