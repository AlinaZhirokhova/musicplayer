import { Navigation } from '../../components/navigation/navigation.jsx'
import { Search } from '../../components/search/search.jsx'
import { Bar } from '../../components/bar/bar.jsx'
import { PlaylistTitle } from '../../components/playlisttitle/playlisttitle.jsx'
import { MyPlaylist } from './myTracksStyle.jsx'
import * as S from '../../AppStyle.jsx'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { PlaylistItem } from '../../components/playlistitem/playlistitem.jsx'
import { useSelector } from 'react-redux'

export const MyTracks = () => {
  const {currentTheme} = useContext(ThemeContext)
  let styles = {
    backgroundColor: currentTheme ? '#ffffff' : '#181818',
    color: currentTheme ? '#000000' : '#ffffff'
  }

  const tracks = useSelector((state) => state.like.tracks)

  return (
    <S.Container style={styles}>
      <S.Main>
        <Navigation />
        <S.MainCenterBlock>
          <Search />
          <S.MainCenterBlockTitle>Мои треки</S.MainCenterBlockTitle>
          <S.MainCenterBlockContent>
            <PlaylistTitle />
            <MyPlaylist>
            { tracks?.map((track) => {
                    return (
                      <PlaylistItem
                      
                      key={track.id}
                      // id={track.id}
                      // title={track.name}
                      // titleSpan={track.titleSpan}
                      // author={track.author}
                      // album={track.album}
                      // time={track.duration_in_seconds}
                      track={track}
                      />
                    )
                  })}
            </MyPlaylist>
          </S.MainCenterBlockContent>
        </S.MainCenterBlock>
      </S.Main>
      <Bar />
      <S.Footer></S.Footer>
    </S.Container>
  )
}
