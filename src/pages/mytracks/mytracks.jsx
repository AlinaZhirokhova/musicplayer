import { Navigation } from '../../components/navigation/navigation.jsx'
import { Search } from '../../components/search/search.jsx'
import { PlaylistTitle } from '../../components/playlisttitle/playlisttitle.jsx'
import { MyPlaylist } from './myTracksStyle.jsx'
import * as S from '../../AppStyle.jsx'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { PlaylistItem } from '../../components/playlistitem/playlistitem.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { setTrackId } from '../../redux/Slices/trackSlice.js'

export const MyTracks = () => {
  const {currentTheme} = useContext(ThemeContext)
  const dispatch = useDispatch()
  const tracks = useSelector((state) => state.like.tracks)

  const handleTrackClick = (obj) => {
    dispatch(setTrackId(obj))
  }

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
          <S.MainCenterBlockTitle>Мои треки</S.MainCenterBlockTitle>
          <S.MainCenterBlockContent>
            <PlaylistTitle />
            <MyPlaylist>
            { tracks?.map((track) => {
                    return (
                      <PlaylistItem
                      handleClick={handleTrackClick}
                      key={track.id}
                      id={track.id}
                      track={track}
                      />
                    )
                  })}
            </MyPlaylist>
          </S.MainCenterBlockContent>
        </S.MainCenterBlock>
      </S.Main>
      <S.Footer></S.Footer>
    </S.Container>
  )
}
