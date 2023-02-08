import { Navigation } from '../../components/navigation/navigation.jsx'
import { Search } from '../../components/search/search.jsx'
import { Bar } from '../../components/bar/bar.jsx'
import { PlaylistTitle } from '../../components/playlisttitle/playlisttitle.jsx'
import { MyPlaylist } from './myTracksStyle.jsx'
import * as S from '../../AppStyle.jsx'

export const MyTracks = () => {
  return (
    <S.Container>
      <S.Main>
        <Navigation />
        <S.MainCenterBlock>
          <Search />
          <S.MainCenterBlockTitle>Мои треки</S.MainCenterBlockTitle>
          <S.MainCenterBlockContent>
            <PlaylistTitle />
            <MyPlaylist />
          </S.MainCenterBlockContent>
        </S.MainCenterBlock>
      </S.Main>
      <Bar />
      <S.Footer></S.Footer>
    </S.Container>
  )
}
