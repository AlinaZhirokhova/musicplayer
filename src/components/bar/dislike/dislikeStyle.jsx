import styled from 'styled-components'
import { Icon } from '../barStyled.jsx'
import { ReactComponent as DislikeIcon } from '../../../img/icon/dislike.svg'

export const DislikeTrackPlay = styled(Icon)`
  margin-left: 30px;
`

export const DislikeIconSvgDark = styled(DislikeIcon)`
  width: 14.34px;
  height: 13px;
  fill: transparent;
  stroke: #696969;

  &:hover {
    stroke: #ACACAC;
  }
`

export const DislikeIconSvgDarkActive = styled(DislikeIcon)`
  stroke: #ffffff;
  fill: #696969;
  
`

export const DislikeIconSvgLight = styled(DislikeIcon)`
  width: 14.34px;
  height: 13px;
  fill: transparent;
  stroke: #B1B1B1;

  &:hover {
    stroke: #707070;
    fill: transparent;
  }

  &:active {
    stroke: #000000;
    fill: #AD61FF;
  }
`
