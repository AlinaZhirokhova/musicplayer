import * as S from './progressStyle'
import useSound from 'use-sound'
import { useState, useEffect} from 'react'
import audio from '../../../audio.mp3'
// import { PlayingContext } from '../../../context/PlayingContext'

export const Progress = () => {
  const [play, { duration, sound }] = useSound(audio)
//   const {isPlaying} = useContext(PlayingContext)

  const [time, setTime] = useState({
    min: "",
    sec: ""
  });
  
  const [currTime, setCurrTime] = useState({
    min: '',
    sec: '',
  })

  console.log(time)
  console.log(currTime)
  console.log(play)

  const [seconds, setSeconds] = useState()

  useEffect(() => {
    if (duration) {
        console.log(duration)
      const sec = duration / 1000
      const min = Math.floor(sec / 60)
      const secRemain = Math.floor(sec % 60)
      setTime({
        min: min,
        sec: secRemain,
      })
    }
  })

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        console.log(sound.seek([]))
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

  return (
    <>
      {/* <div className="time">
        <p>
          {currTime.min}:{currTime.sec}
        </p>
        <p>
          {time.min}:{time.sec}
        </p>
      </div> */}
      <S.ProgressBar
        type="range"
        min="0"
        max={duration / 1000}
        default="0"
        value={seconds}
        onChange={(e) => {
          sound.seek([e.target.value])
        }}
      ></S.ProgressBar>
    </>
  )
}
