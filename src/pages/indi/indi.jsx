import { useEffect, useState } from 'react'
import { Navigation } from '../../components/navigation/navigation.jsx'
import { Search } from '../../components/search/search.jsx'
import { PlaylistTitle } from '../../components/playlisttitle/playlisttitle.jsx'
import { IndiPlaylist } from './indiStyle.jsx'
import * as S from '../../AppStyle.jsx'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { PlaylistItem } from '../../components/playlistitem/playlistitem.jsx'
import { nanoid } from 'nanoid'
import { SkeletonTrack } from '../../components/skeletonTrack/skeletonTrack.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { setSearch } from '../../redux/Slices/filterSlice.js'
import { setTrackId } from '../../redux/Slices/trackSlice.js'

export const Indi = () => {
  const [tracks, setTracks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const search = useSelector((state) => state.filter.search)
  const dispatch = useDispatch()
 
  const { currentTheme } = useContext(ThemeContext)
  let styles = {
    backgroundColor: currentTheme ? '#ffffff' : '#181818',
    color: currentTheme ? '#000000' : '#ffffff',
  }

  useEffect(() => {
    setIsLoading(true)
    const getTracks = async () => {
      const res = await fetch(
        'https://painassasin.online/catalog/selection/3/?format=json'
      )
      const response = await res.json()
      setIsLoading(false)
      setTracks(response)
    }
    getTracks()
  }, [])

  useEffect(() => {
    dispatch(setSearch(''))
  }, [])

  const handleTrackClick = (obj) => {
    dispatch(setTrackId(obj))
  }

  return (
    <S.Container style={styles}>
      <S.Main>
        <Navigation />
        <S.MainCenterBlock>
          <Search />
          <S.MainCenterBlockTitle>Инди заряд</S.MainCenterBlockTitle>
          <S.MainCenterBlockContent>
            <PlaylistTitle />
            <IndiPlaylist>
              {isLoading
                ? Array.from({ length: 7 }).map(() => (
                    <SkeletonTrack key={nanoid()} />
                  ))
                : tracks?.items
                    ?.filter((track) => {
                      return track.name
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    })
                    .map((track) => {
                      return (
                        <PlaylistItem
                          handleClick={handleTrackClick}
                          key={track.id}
                          id={track.id}
                          track={track}
                        />
                      )
                    })}
            </IndiPlaylist>
          </S.MainCenterBlockContent>
        </S.MainCenterBlock>
      </S.Main>
      <S.Footer></S.Footer>
    </S.Container>
  )
}
