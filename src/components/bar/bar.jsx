import * as S from './barStyled'
import { useState, useEffect, useContext, useRef } from 'react'
import { Contain } from './contain/contain'
import { Like } from './like/like'
import { Dislike } from './dislike/dislike'
import { SkeletonBar } from '../skeletonBar/skeletonBar'
import { ThemeContext } from '../../context/ThemeContext'
import { Prev } from './prev/prev'
import { Next } from './next/next'
import { Repeat } from './repeat/repeat'
import { Shuffle } from './shuffle/shuffle'
import { useSelector } from 'react-redux'

export const Bar = () => {
  const [isLoading, setIsLoading] = useState(true)
  const { currentTheme } = useContext(ThemeContext)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isRepeat, setIsRepeat] = useState(false)
  const { trackId } = useSelector((state) => state.id)
  const [volume, setVolume] = useState(50)
  const progressRef = useRef()
  const [audio, setAudio] = useState(null)
  const audioRef = useRef(null)

  const toggleRepeat = () => setIsRepeat(!isRepeat)

  useEffect(() => {
    audioRef.current?.pause()
    setAudio(trackId.track_file)
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

  useEffect(() => {
    setAudio(trackId.track_file)
  }, [trackId])

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
  }, [audio])

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
            <S.ControlsPlayer
            onRepeatClick={toggleRepeat}
            isRepeat={isRepeat}>
              <Prev />
              <S.Play onClick={togglePlay}>
                {isPlaying ? (
                  <S.StopIconSvg style={styles} alt="stop" />
                ) : (
                  <S.PlayIconSvg style={styles} alt="play" />
                )}
              </S.Play>
              <Next />
              <Repeat />
              <Shuffle />
            </S.ControlsPlayer>
            <S.PlayerTrackPlay>
              {isLoading ? <SkeletonBar /> : <Contain />}
              <S.LikeDisTrackPlay>
                <Like />
                <Dislike />
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
