import { Navigation } from '../../components/navigation/navigation.jsx'
import { Search } from '../../components/search/search.jsx'
import * as S from '../../AppStyle.jsx'
import * as Style from '../../components/bar/barStyled'
import { Progress } from '../../components/bar/progress/progress.jsx'
import { Volume } from '../../components/bar/volume/volume.jsx'
import { Controls } from '../../components/bar/controls/controls.jsx'
import { Like } from '../../components/bar/like/like.jsx'
import { Dislike } from '../../components/bar/dislike/dislike.jsx'
import { SkeletonBar } from '../../components/skeletonBar/skeletonBar.jsx'
import { NotFoundPage } from '../../components/notfoundpage/notFoundPage.jsx'

export const NotFound = () => {
  return (
    <S.Container>
      <S.Main>
        <Navigation />
        <S.MainCenterBlock>
          <Search />
          <NotFoundPage />
        </S.MainCenterBlock>
      </S.Main>
      <Style.BarContainer>
      <Style.ContentBar>
        <Progress />
        <Style.PlayerBlockBar>
          <Style.PlayerPlayerBar>
            <Controls />
            <Style.PlayerTrackPlay>
              <SkeletonBar/>
              <Style.LikeDisTrackPlay>
                <Like />
                <Dislike />
              </Style.LikeDisTrackPlay>
            </Style.PlayerTrackPlay>
          </Style.PlayerPlayerBar>
          <Volume />
        </Style.PlayerBlockBar>
      </Style.ContentBar>
    </Style.BarContainer>
      <S.Footer></S.Footer>
    </S.Container>
  )
}
