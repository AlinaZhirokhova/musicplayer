import { Navigation } from '../../components/navigation/navigation.jsx'
import { Search } from '../../components/search/search.jsx'
import { Bar } from '../../components/bar/bar.jsx'
import { PlaylistTitle } from '../../components/playlisttitle/playlisttitle.jsx'
import { DayPlaylistTracks } from './dayplaylistStyle.jsx'
import * as S from '../../AppStyle.jsx'

export const DayPlaylist = () => {
  return (
    <S.Container>
      <S.Main>
        <Navigation />
        <S.MainCenterBlock>
          <Search />
          <S.MainCenterBlockTitle>Плейлист дня</S.MainCenterBlockTitle>
          <S.MainCenterBlockContent>
            <PlaylistTitle />
            <DayPlaylistTracks />
          </S.MainCenterBlockContent>
        </S.MainCenterBlock>
      </S.Main>
      <Bar />
      <S.Footer></S.Footer>
    </S.Container>
  )
}
