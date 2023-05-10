import { Navigation } from '../../components/navigation/navigation.jsx'
import { Search } from '../../components/search/search.jsx'
import { Filter } from '../../components/filter/filter.jsx'
import { PlaylistTitle } from '../../components/playlisttitle/playlisttitle.jsx'
import { Playlist } from '../../components/playlist/playlist.jsx'
import { Sidebar } from '../../components/sidebar/sidebar.jsx'
import * as S from '../../AppStyle.jsx'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export const Main = () => {  
  const {currentTheme} = useContext(ThemeContext)

  let styles = {
    backgroundColor: currentTheme ? '#ffffff' : '#181818',
    color: currentTheme ? '#000000' : '#ffffff'
  }

  return (
    <S.Container style={styles}>
      <S.Main>
        <Navigation />
        <S.MainCenterBlock>
          <Search />
          <S.MainCenterBlockTitle>Треки</S.MainCenterBlockTitle>
          <Filter/>
          <S.MainCenterBlockContent>
            <PlaylistTitle />
            <Playlist />
          </S.MainCenterBlockContent>
        </S.MainCenterBlock>
        <Sidebar />
      </S.Main>
      <S.Footer></S.Footer>
    </S.Container>
  )
}
