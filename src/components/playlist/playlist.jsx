import { useEffect } from 'react'
import { useState } from 'react'
import { PlaylistItem } from '../playlistitem/playlistitem.jsx'
import * as S from './playlistStyle.jsx'
import { SkeletonTrack } from '../skeletonTrack/skeletonTrack.jsx'
import { nanoid } from 'nanoid'

export const Playlist = () => {
  const [tracks, setTracks] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getTracks = async () => {
      setIsLoading(true)
      const res = await fetch('https://painassasin.online/catalog/track/all/')
      const response = await res.json()
      setIsLoading(false)
      setTracks(response)
    }
    getTracks()
    console.log(tracks);
  }, [])
  return (
    <S.PlaylistContainer>
      {
        isLoading 
        ? Array.from({length:7}).map(() => <SkeletonTrack key={nanoid()}/>)
        : tracks.map((track) => {
        return (
          <PlaylistItem
            key={track.id}
            title={track.name}
            titleSpan={track.titleSpan}
            author={track.author}
            album={track.album}
            time={track.duration_in_seconds}
          />
        )
      })}
    </S.PlaylistContainer>
  )
}
