import * as S from './barStyled'
import { useState, useEffect, useContext, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Contain } from './contain/contain'
import { SkeletonBar } from '../skeletonBar/skeletonBar'
import { ThemeContext } from '../../context/ThemeContext'
import { Prev } from './prev/prev'
import { Next } from './next/next'
import { Repeat } from './repeat/repeat'
import { Shuffle } from './shuffle/shuffle'
import { dislikeTrack, likeTrack, selectCurrentLikeTrack } from '../../redux/Slices/likeSlice'

export const Bar = () => {
  const [isLoading, setIsLoading] = useState(true)
  const { currentTheme } = useContext(ThemeContext)
  const [isPlaying, setIsPlaying] = useState(false)
  const { trackId } = useSelector((state) => state.id)
  const [volume, setVolume] = useState(50)
  const progressRef = useRef()
  const audioRef = useRef(null)
  const currentLike = useSelector(selectCurrentLikeTrack(trackId.id))
  const [ like, setLike ] = useState(currentLike ? true : false)
  const [ dislike, setDislike ] = useState(currentLike ? true : false)
  const dispatch = useDispatch()
  
  useEffect(() => {
    audioRef.current?.pause()
    audioRef.current = new Audio(trackId.track_file)
    audioRef.current.ontimeupdate = () => {
      const progress =
        (audioRef.current.currentTime / audioRef.current.duration) * 1000
      progressRef.current.value = progress
    }
  }, [trackId])

  const progressChange = () => {
    audioRef.current.currentTime = progressRef.current.value / 1000 * audioRef.current.duration
  }

  // useEffect(() => {
  //   setAudio(trackId.track_file)
  //   console.log('fjfjh')
  // }, [trackId])

  setTimeout(() => {
    setIsLoading(false)
  }, 2000)

  const start = () => {
    audioRef.current.play()
    setIsPlaying(true)
  }

  const stop = () => {
    audioRef.current.pause()
    setIsPlaying(false)
  }

  useEffect(() => {
    start()
  }, [trackId])

  const togglePlay = isPlaying ? stop : start

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100
    }
  }, [volume, audioRef])

  let styleBar = {
    background: currentTheme ? '#ffffff' : 'rgba(28, 28, 28, 0.5)',
  }

  let styles = {
    fill: currentTheme ? '#B1B1B1' : '#D9D9D9',
    stroke: currentTheme ? '#B1B1B1' : '#D9D9D9',
  }

  let styleProgress = {
    backgroundColor: currentTheme ? '#D9D9D9' : '#2E2E2E',
  }

  let styleImg = {
    stroke: currentTheme ? '#fffffff' : '#B1B1B1',
  }  

  function handleLike () {
    setLike(true)
    setDislike(false)
    dispatch(likeTrack(trackId))
  }

  function handleDislike () {
    setDislike(true)
    setLike(false)
    dispatch(dislikeTrack(trackId))
  }

  return (
    <S.BarContainer style={styleBar}>
      <S.ContentBar>
        <S.ProgressBar
          key={trackId.track_file}
          style={styleProgress}
          type="range"
          ref={progressRef}
          defaultValue={0}
          onChange={progressChange}
          max={1000}
        ></S.ProgressBar>
        <S.PlayerBlockBar>
          <S.PlayerPlayerBar>
            <S.ControlsPlayer>
              <Prev />
              <S.Play onClick={togglePlay}>
                {isPlaying ? (
                  <S.StopIconSvg style={styles} alt="stop" />
                ) : (
                  <S.PlayIconSvg style={styles} alt="play" />
                )}
              </S.Play>
              <Next />
              <Repeat/>
              <Shuffle />
            </S.ControlsPlayer>
            <S.PlayerTrackPlay>
              {isLoading ? <SkeletonBar /> : <Contain />}
              <S.LikeDisTrackPlay>
                { like 
                ? <S.LikeIconSvgDarkActive alt="like"/> 
                : <S.LikeIconSvgDark onClick={handleLike} alt="like"/>}
                { dislike 
                ? <S.DislikeIconSvgDarkActive alt="dislike"/> 
                : <S.DislikeIconSvgDark onClick={handleDislike} alt="like"/>}  
              </S.LikeDisTrackPlay>
            </S.PlayerTrackPlay>
          </S.PlayerPlayerBar>
          {currentTheme ? (
            <S.BlockVolume>
              <S.ContentVolume>
                <S.ImageVolume>
                  <S.VolumeIconSvg style={styleImg} alt="volume" />
                </S.ImageVolume>
                <S.ProgressVolume>
                  <S.ProgressLineVolumeLight
                    onChange={(e) => setVolume(e.target.value)}
                    value={volume}
                    min={0}
                    max={100}
                    type="range"
                  />
                </S.ProgressVolume>
              </S.ContentVolume>
            </S.BlockVolume>
          ) : (
            <S.BlockVolume>
              <S.ContentVolume>
                <S.ImageVolume>
                  <S.VolumeIconSvg style={styleImg} alt="volume" />
                </S.ImageVolume>
                <S.ProgressVolume>
                  <S.ProgressLineVolumeDark
                    onChange={(e) => setVolume(e.target.value)}
                    value={volume}
                    min={0}
                    max={100}
                    type="range"
                  />
                </S.ProgressVolume>
              </S.ContentVolume>
            </S.BlockVolume>
          )}
        </S.PlayerBlockBar>
      </S.ContentBar>
    </S.BarContainer>
  )
}
