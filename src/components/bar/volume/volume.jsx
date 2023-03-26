// import * as S from './volumeStyle'
// import { useContext, useEffect, useRef, useState } from 'react'
// import { ThemeContext } from '../../../context/ThemeContext'
// // import { useSelector } from 'react-redux'

// export const Volume = () => {
//   const { currentTheme } = useContext(ThemeContext)
//   const [volume, setVolume] = useState(60)
//   const volumeRef = useRef()
//   // const { trackId } = useSelector((state) => state.id)

//   // useEffect(() => {
//   //   setVolume(trackId.track_file)
//   // }, [trackId])

//   useEffect(() => {
//     if (volumeRef) {
//       volumeRef.current.volume = volume/100
//     }
//   }, [volume, volumeRef])

//   let styleImg = {
//     stroke: currentTheme ? '#fffffff' : '#B1B1B1',
//   }

//   const onVolumeChange = (event) => {
//     volumeRef.current.volume = event.target.value / 100
//   }

//   if (currentTheme) {
//     return (
//       <S.BlockVolume>
//         <S.ContentVolume>
//           <S.ImageVolume>
//             <S.VolumeIconSvg style={styleImg} alt="volume" />
//           </S.ImageVolume>
//           <S.ProgressVolume>
//             <S.ProgressLineVolumeLight
//               onChange={onVolumeChange}
//               value={volume}
//               min={0}
//               max={100}
//               type="range"
//             />
//           </S.ProgressVolume>
//         </S.ContentVolume>
//       </S.BlockVolume>
//     )
//   } else {
//     return (
//       <S.BlockVolume>
//         <S.ContentVolume>
//           <S.ImageVolume>
//             <S.VolumeIconSvg style={styleImg} alt="volume" />
//           </S.ImageVolume>
//           <S.ProgressVolume>
//             <S.ProgressLineVolumeDark
//               onChange = {(e) => setVolume(e.target.value)}
//               value={volume}
//               min={0}
//               max={100}
//               type="range"
//             />
//           </S.ProgressVolume>
//         </S.ContentVolume>
//       </S.BlockVolume>
//     )
//   }
// }
