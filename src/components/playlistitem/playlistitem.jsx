import note from '../../img/icon/sprite.svg#icon-note'
import like from '../../img/icon/sprite.svg#icon-like'

export const PlaylistItem = (props) => {
  const getTime = (time) => {
    let ost = 0
    if (time % 60 < 10) {
      ost = '0' + (time % 60)
    } else {
      ost = time % 60
    }
    return Math.floor(time / 60) + ':' + ost
  }
    return (
      <div className="playlist__item" id={props.id}>
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              <svg className="track__title-svg" alt="music">
                <use xlinkHref={note}></use>
              </svg>
            </div>
            <div className="track__title-text">
              <a className="track__title-link" href="#">
                {props.title}{' '}
                <span className="track__title-span">{props.titleSpan}</span>
              </a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__author-link" href="#">
              {props.author}
            </a>
          </div>
          <div className="track__album">
            <a className="track__album-link" href="#">
              {props.album}
            </a>
          </div>
          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref={like}></use>
            </svg>
            <span className="track__time-text">{getTime(props.time)}</span>
          </div>
        </div>
      </div>
    )
}