import {ReactComponent as NoteIcon} from '../../../img/icon/note.svg'

export const Contain = () => {
  return (
    <div className="track-play__contain">
      <div className="track-play__image">
        <NoteIcon className="track-play__svg" alt="music" />
      </div>
      <div className="track-play__author">
        <a className="track-play__author-link" href="http://">
          Ты та...
        </a>
      </div>
      <div className="track-play__album">
        <a className="track-play__album-link" href="http://">
          Баста
        </a>
      </div>
    </div>
  )
}
