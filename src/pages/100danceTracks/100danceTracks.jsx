import { Navigation } from '../../components/navigation/navigation.jsx'
import { Search } from '../../components/search/search.jsx'
import { Bar } from '../../components/bar/bar.jsx'
import { PlaylistTitle } from '../../components/playlisttitle/playlisttitle.jsx'
import { DancePlaylist } from './100danceTracksStyle.jsx'
import * as S from '../../AppStyle.jsx'

export const DanceTracks = () => {
  return (
    <S.Container>
      <S.Main>
        <Navigation />
        <S.MainCenterBlock>
          <Search />
          <S.MainCenterBlockTitle>100 танцевальных хитов</S.MainCenterBlockTitle>
          <S.MainCenterBlockContent>
            <PlaylistTitle />
            <DancePlaylist />
          </S.MainCenterBlockContent>
        </S.MainCenterBlock>
      </S.Main>
      <Bar />
      <S.Footer></S.Footer>
    </S.Container>
  )
}
