export const PlaylistItem = (props) => {
    return (
      <div className="playlist__item" id={props.id}>
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              <svg className="track__title-svg" alt="music">
                <use xlinkHref="public/sprite.svg#icon-note"></use>
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
              <use xlinkHref="public/sprite.svg#icon-like"></use>
            </svg>
            <span className="track__time-text">{Math.floor(props.time / 60)+':'+(props.time % 60)}</span>
          </div>
        </div>
      </div>
    )
}