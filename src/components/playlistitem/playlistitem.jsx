import * as S from './playlistitemStyle.jsx'
import { ReactComponent as NoteIcon } from '../../img/icon/note.svg'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

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

  const {currentTheme} = useContext(ThemeContext)
  let styles = {
    color: currentTheme ? '#000000' : '#ffffff'
  }

  let stylesImage = {
    background: currentTheme ? '#F6F4F4' : '#313131'
  }

    return (
      <S.PlaylistItemContainer id={props.id}>
        <S.Track>
          <S.TrackTitle>
            <S.TrackTitleImage style={stylesImage}>
              <NoteIcon alt="music"/>
            </S.TrackTitleImage>
            <S.TrackTitleText>
              <S.TrackTitleLink href="#" style={styles}>
                {props.title}{' '}
                <S.TrackTitleSpan>{props.titleSpan}</S.TrackTitleSpan>
              </S.TrackTitleLink>
            </S.TrackTitleText>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLink href="#" style={styles}>
              {props.author}
            </S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum>
            <S.TrackAlbumLink href="#">
              {props.album}
            </S.TrackAlbumLink>
          </S.TrackAlbum>
          <S.TrackTime>
            <S.LikeIconSvg alt="time"/>
            <S.TrackTimeText>{getTime(props.time)}</S.TrackTimeText>
          </S.TrackTime>
        </S.Track>
      </S.PlaylistItemContainer>
    )
}