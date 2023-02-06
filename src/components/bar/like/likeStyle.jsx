import styled from 'styled-components'
// import { Icon } from '../barStyled.jsx'
import { ReactComponent as LikeIcon } from '../../../img/icon/like.svg'

// export const LikeTrackPlay = styled(Icon)`
//   &:active {
//     fill: #696969;
//     stroke: #ffffff;
//     cursor: pointer;
//   }
// `

// export const LikeTrackPlay = styled.div`
//   padding: 5px;
//   display: flex;
//   align-items: center;

//   &:hover svg {
//     fill: transparent;
//     stroke: #acacac;
//     cursor: pointer;
//   }

//   &:active svg {
//     fill: #696969;
//     stroke: #ffffff;
//     cursor: pointer;
//   }
// `

export const LikeIconSvg = styled(LikeIcon)`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`
