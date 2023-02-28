import * as S from './barStyled'
import { useState, useEffect, useContext } from 'react'
import useSound from 'use-sound'
import audio from '../../audio.mp3'
import { Volume } from './volume/volume'
import { Contain } from './contain/contain'
import { Like } from './like/like'
import { Dislike } from './dislike/dislike'
import { SkeletonBar } from '../skeletonBar/skeletonBar'
import { ThemeContext } from '../../context/ThemeContext'
import { Prev } from './prev/prev'
import { Next } from './next/next'
import { Repeat } from './repeat/repeat'
import { Shuffle } from './shuffle/shuffle'

export const Bar = () => {
  const [isLoading, setIsLoading] = useState(true)
  setTimeout(() => {
    setIsLoading(false)
  }, 2000)

  const [isPlaying, setIsPlaying] = useState(false)
  const [currTime, setCurrTime] = useState({
    min: '',
    sec: '',
  })
  currTime
  const [seconds, setSeconds] = useState('')
  const [play, { pause, duration, sound }] = useSound(audio)

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]))
        const min = Math.floor(sound.seek([]) / 60)
        const sec = Math.floor(sound.seek([]) % 60)
        setCurrTime({
          min,
          sec,
        })
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [sound])

  const start = () => {
    play()
    setIsPlaying(true)
  }

  const stop = () => {
    pause()
    setIsPlaying(false)
  }

  const { currentTheme } = useContext(ThemeContext)

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
  

  return (
    <S.BarContainer style={styleBar}>
      <S.ContentBar>
        <S.ProgressBar
          style={styleProgress}
          type="range"
          min="0"
          max={duration / 1000}
          default="0"
          value={seconds}
          curr={currTime.min}
          onChange={(e) => {
            sound.seek([e.target.value])
          }}
        ></S.ProgressBar>
        <S.PlayerBlockBar>
          <S.PlayerPlayerBar>
            <S.ControlsPlayer>
              <Prev />
              <S.Play
                onClick={() => {
                  isPlaying ? stop() : start()
                }}
              >
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
          <Volume />
        </S.PlayerBlockBar>
      </S.ContentBar>
    </S.BarContainer>
  )
}
