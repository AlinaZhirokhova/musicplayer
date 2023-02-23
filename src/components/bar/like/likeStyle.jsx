import styled from 'styled-components'
import { ReactComponent as LikeIcon } from '../../../img/icon/like.svg'

export const LikeIconSvgDark = styled(LikeIcon)`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: #696969;

  &:hover {
    stroke: #ACACAC;
  }

  &:active {
    stroke: #ffffff;
    fill: #696969;
  }
`

export const LikeIconSvgLight= styled(LikeIcon)`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: #B1B1B1;

  &:hover {
    stroke: #707070;
    fill: transparent;
  }

  &:active {
    stroke: #AD61FF;
    fill: #AD61FF;
  }
`
