import { PlaylistItem } from './playlistitem.jsx'
import tracks from './tracks'

export const Playlist = () => {
    
  return (
    <div className="content__playlist playlist">
      {tracks.map((track) => {
        <PlaylistItem
          key={track.id}
          title={track.title}
          titleSpan={track.titleSpan}
          author={track.author}
          album={track.album}
          time={track.time}
        />
      })}
    </div>
  )
}
