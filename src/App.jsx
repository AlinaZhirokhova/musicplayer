import { Navigation } from './components/navigation/navigation.jsx'
import { Search } from './components/search/search.jsx'
import { Filter } from './components/filter/filter.jsx'
import { PlaylistTitle } from './components/playlisttitle/playlisttitle.jsx'
import { Playlist } from './components/playlist/playlist.jsx'
import { Sidebar } from './components/sidebar/sidebar.jsx'
import { Bar } from './components/bar/bar.jsx'
import * as S from './AppStyle.jsx'

const App = () => {
  return (
    <S.Container>
      <S.Main>
        <Navigation />
        <S.MainCenterBlock>
          <Search />
          <S.MainCenterBlockTitle>Треки</S.MainCenterBlockTitle>
          <Filter />
          <S.MainCenterBlockContent>
            <PlaylistTitle />
            <Playlist />
          </S.MainCenterBlockContent>
        </S.MainCenterBlock>
        <Sidebar />
      </S.Main>
      <Bar />
      <S.Footer></S.Footer>
    </S.Container>
  )
}

export default App
