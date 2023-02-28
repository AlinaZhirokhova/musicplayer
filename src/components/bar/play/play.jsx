// import * as S from './playStyle'
// import useSound from "use-sound"
// import audio from '../../../audio.mp3'
// import { useContext } from 'react'
// import { ThemeContext } from '../../../context/ThemeContext'
// import { PlayingContext } from '../../../context/PlayingContext'

// export const Play = () => {
//   const {isPlaying, setIsPlaying} = useContext(PlayingContext)
//   const [play, { pause } ] = useSound(audio)

//   const start = () => {
//     play()
//     setIsPlaying(true)
//   }

//   const stop = () => {
//     pause()
//     setIsPlaying(false)
//   }

//   const {currentTheme} = useContext(ThemeContext)
//   let styles = {
//     fill: currentTheme ? '#B1B1B1' : '#D9D9D9',
//     stroke: currentTheme ? '#B1B1B1' : '#D9D9D9',
//   }


//   return (
//     <S.PlayPlayer onClick={()=>{isPlaying ? stop() : start()}}>
//       {isPlaying ? (
//         <S.StopIconSvg style={styles} alt="stop" />
//       ) : (
//         <S.PlayIconSvg style={styles} alt="play" />
//       )}
//     </S.PlayPlayer>
//   )

//   // const audioRef = useRef(new Audio(audio))
//   // const start = () => {
//   //   audioRef.current.play()
//   //   setIsPlaying(true)
//   //   // audioRef.current.currentTime
//   //   // console.log(audioRef.current.currentTime)
//   //   // console.log(audioRef.current.duration)
//   // }

//   // const stop = () => {
//   //   audioRef.current.pause()
//   //   setIsPlaying(false)
//   // }

//   // return (
//   //   <S.PlayPlayer onClick={()=>{isPlaying ? stop() : start()}}>
//   //     {isPlaying ? (
//   //       <S.StopIconSvg alt="stop" />
//   //     ) : (
//   //       <S.PlayIconSvg alt="play" />
//   //     )}
//   //   </S.PlayPlayer>
//   // )
// }