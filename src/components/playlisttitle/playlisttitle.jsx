import {ReactComponent as Watch} from '../../img/icon/watch.svg'

export const PlaylistTitle = () => {
    return (
      <div className="content__title playlist-title">
        <div className="playlist-title__col col01">Трек</div>
        <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
        <div className="playlist-title__col col03">АЛЬБОМ</div>
        <div className="playlist-title__col col04">
          <Watch className="playlist-title__svg" alt="time"/>
        </div>
      </div>
    )
}