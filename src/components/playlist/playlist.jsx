import { useEffect } from 'react'
import { useState } from 'react'
import { PlaylistItem } from '../playlistitem/playlistitem.jsx'

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
    <div className="content__playlist playlist">
      {
        isLoading 
        ? Array.from({length:7}).map(() => 'Идет загрузка')
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
    </div>
  )
}
