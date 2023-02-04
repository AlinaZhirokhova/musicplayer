import {ReactComponent as NoteIcon} from '../../img/icon/note.svg'
import {ReactComponent as LikeIcon} from '../../img/icon/like.svg'
import * as S from './playlistitemStyle.jsx'

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
      <S.PlaylistItemContainer id={props.id}>
        <S.Track>
          <S.TrackTitle>
            <S.TrackTitleImage>
              <NoteIcon className="track__title-svg" alt="music"/>
            </S.TrackTitleImage>
            <S.TrackTitleText>
              <S.TrackTitleLink href="#">
                {props.title}{' '}
                <S.TrackTitleSpan>{props.titleSpan}</S.TrackTitleSpan>
              </S.TrackTitleLink>
            </S.TrackTitleText>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLink href="#">
              {props.author}
            </S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum>
            <S.TrackAlbumLink href="#">
              {props.album}
            </S.TrackAlbumLink>
          </S.TrackAlbum>
          <S.TrackTime>
            <LikeIcon className="track__time-svg" alt="time"/>
            <S.TrackTimeText>{getTime(props.time)}</S.TrackTimeText>
          </S.TrackTime>
        </S.Track>
      </S.PlaylistItemContainer>
    )
}