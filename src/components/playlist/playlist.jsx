import { useEffect } from 'react'
import { useState } from 'react'
import { PlaylistItem } from '../playlistitem/playlistitem.jsx'
import * as S from './playlistStyle.jsx'
import { SkeletonTrack } from '../skeletonTrack/skeletonTrack.jsx'
import { nanoid } from 'nanoid'
import { useDispatch, useSelector } from 'react-redux'
import { setTrackId } from '../../redux/Slices/trackSlice.js'

export const Playlist = () => {
  const [tracks, setTracks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const search = useSelector((state) => state.filter.search)
  const year = useSelector((state) => state.filter.year)
  const dispatch = useDispatch()
  const { author } = useSelector((state) => state.filter)
  const { genre } = useSelector((state) => state.filter)

  useEffect(() => {
    const getTracks = async () => {
      setIsLoading(true)
      const req = await fetch('https://painassasin.online/catalog/track/all/')
      const res = await req.json()
      setIsLoading(false)
      setTracks(res)
    }
    getTracks()
  }, [])

  if (!isLoading) {
    switch (year) {
      case 'new':
        tracks.sort((a, b) => {
          return new Date(b.release_date) - new Date(a.release_date)
        })
        break

      case 'old':
        tracks.sort((a, b) => {
          return new Date(a.release_date) - new Date(b.release_date)
        })
        break

      default:
        break
    }
  }

  const handleTrackClick = (obj) => {
    dispatch(setTrackId(obj))
  }

  if (author.length > 0) {
    return (
      <S.PlaylistContainer>
        {isLoading
          ? Array.from({ length: 7 }).map(() => (
              <SkeletonTrack key={nanoid()} />
            ))
          : tracks
              ?.filter((track) => {
                return author.includes(track.author)
              })
              .map((track) => {
                return (
                  <PlaylistItem
                    handleClick={handleTrackClick}
                    key={track.id}
                    track={track}
                  />
                )
              })}
      </S.PlaylistContainer>
    )
  }

  if (genre.length > 0) {
    return (
      <S.PlaylistContainer>
        {isLoading
          ? Array.from({ length: 7 }).map(() => (
              <SkeletonTrack key={nanoid()} />
            ))
          : tracks
              ?.filter((track) => {
                return genre.includes(track.genre)
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
      </S.PlaylistContainer>
    )
  }
  return (
    <S.PlaylistContainer>
      {isLoading
        ? Array.from({ length: 7 }).map(() => <SkeletonTrack key={nanoid()} />)
        : tracks
            .filter((track) => {
              return track.name.toLowerCase().includes(search.toLowerCase())
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
    </S.PlaylistContainer>
  )
}
