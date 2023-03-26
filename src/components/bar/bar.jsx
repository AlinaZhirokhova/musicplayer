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
  const { trackId } = useSelector((state) => state.id)
  const [audio, setAudio] = useState(trackId.track_file)
  const [volume, setVolume] = useState(50)
  const audioRef = useRef(new Audio (trackId))
  const progressRef = useRef()

  useEffect(() => {
    audioRef.current.ontimeupdate = () => {
      const progress = (audioRef.current.currentTime / audioRef.current.duration) * 1000
      progressRef.current.value = progress
    }
  }, [audioRef, progressRef])

  const progressChange = () => {
    audioRef.current.currentTime = progressRef.current.value / 1000 * audioRef.current.duration
  }

  useEffect(() => {
    console.log(trackId.track_file)
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
  }, [])

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
        <S.BarAudio
          min={0}
          max={100}
          data={audio}
          key={trackId.id}
          controls
          ref={audioRef}
        >
          <source 
          src={audio} 
          type="audio/mpeg" 
          />
        </S.BarAudio>
        <S.ProgressBar
          style={styleProgress}
          type="range"
          ref={progressRef}
          defaultValue={0}
          onChange={progressChange}
          max={1000}
          // min="0"
          // max={duration / 1000}  
          // default="0"
          // value={seconds}
          // curr={currTime.min}
          // onChange={(e) => {
          //   sound.seek([e.target.value])
          // }}
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
