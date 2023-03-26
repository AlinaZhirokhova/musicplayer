import * as S from './playlistitemStyle.jsx'
import { ReactComponent as NoteIcon } from '../../img/icon/note.svg'
import { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeContext } from '../../context/ThemeContext'
import { dislikeTrack, likeTrack, selectCurrentLikeTrack } from '../../redux/Slices/likeSlice.js'
import { useEffect } from 'react'
// import { setTrackId } from '../../redux/Slices/trackSlice.js'

export const PlaylistItem = ({track, handleClick}) => {
  const dispatch = useDispatch()
  const currentLike = useSelector(selectCurrentLikeTrack(track.id))
  const [ like, setLike ] = useState(currentLike ? true : false)
  const likeTracks = useSelector((state) => state.like.tracks)

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

  function handleLike () {
    setLike(true)
    dispatch(likeTrack(track))
  }

  function handleDislike () {
    setLike(false)
    dispatch(dislikeTrack(track))
  }

  useEffect (() => {
    const likesJson = JSON.stringify(likeTracks)
    localStorage.setItem('likes', likesJson)
  }, [likeTracks])


    return (
      <S.PlaylistItemContainer id={track.id} >
        <S.Track >
          <S.TrackTitle>
            <S.TrackTitleImage style={stylesImage} onClick={() => handleClick(track)}>
              <NoteIcon alt="music"/>
            </S.TrackTitleImage>
            <S.TrackTitleText >
              <S.TrackTitleLink style={styles} >
                {track.name}{' '}
                <S.TrackTitleSpan>{track.titleSpan}</S.TrackTitleSpan>
              </S.TrackTitleLink>
            </S.TrackTitleText>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLink style={styles}>
              {track.author}
            </S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum>
            <S.TrackAlbumLink>
              {track.album}
            </S.TrackAlbumLink>
          </S.TrackAlbum>
          <S.TrackTime>
            { like ? <S.UnlikeIconSvg onClick={handleDislike} alt="time"/> : <S.LikeIconSvg onClick={handleLike} alt="time"/>}
            
            <S.TrackTimeText>{getTime(track.duration_in_seconds)}</S.TrackTimeText>
          </S.TrackTime>
        </S.Track>
      </S.PlaylistItemContainer>
    )
}