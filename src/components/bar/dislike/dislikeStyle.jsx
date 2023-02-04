import styled from 'styled-components'
import { Icon } from '../barStyled.jsx'
import { ReactComponent as DislikeIcon } from '../../../img/icon/dislike.svg'

export const DislikeTrackPlay = styled(Icon)`
  margin-left: 30px;
  
  & :active {
    fill: #696969;
    stroke: #ffffff;
    cursor: pointer;
  }
`

export const DislikeIconSvg = styled(DislikeIcon)`
  width: 14.34px;
  height: 13px;
  fill: transparent;
  stroke: #696969;
`
