import { Navigation } from '../../components/navigation/navigation.jsx'
import { Search } from '../../components/search/search.jsx'
import { Filter } from '../../components/filter/filter.jsx'
import { PlaylistTitle } from '../../components/playlisttitle/playlisttitle.jsx'
import { Playlist } from '../../components/playlist/playlist.jsx'
import { Sidebar } from '../../components/sidebar/sidebar.jsx'
import { Bar } from '../../components/bar/bar.jsx'
import * as S from '../../AppStyle.jsx'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { useSelector } from 'react-redux'

export const Main = () => {
  const { trackId } = useSelector((state) => state.id)
  
  // const { author: authorRedux } = useSelector((state) => state.filter)
  
  
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
      {Object.keys(trackId).length ? <Bar /> : ''}
      <S.Footer></S.Footer>
    </S.Container>
  )
}
