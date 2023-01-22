import { useEffect } from 'react'
import { useState } from 'react'
import { PlaylistItem } from '../playlistitem/playlistitem.jsx'
// import tracksImport from '../tracks/tracks.jsx'

export const Playlist = () => {
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    const getTracks = async () => {
      const res = await fetch('https://painassasin.online/catalog/track/all/')
      const response = await res.json()
      setTracks(response)
    }
    getTracks()
    console.log(tracks);
  }, [])
  return (
    <div className="content__playlist playlist">
      {tracks.map((track) => {
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
