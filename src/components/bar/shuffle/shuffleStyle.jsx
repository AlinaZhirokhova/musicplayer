import styled from 'styled-components'
import { ReactComponent as ShuffleIcon } from '../../../img/icon/shuffle.svg'


export const ShuffleIconSvgDark = styled(ShuffleIcon)`
  width: 22px;
  height: 14px;
  fill: transparent;
  stroke: #696969;

  &:hover {
    stroke: #ACACAC;
  }
`

export const ShuffleIconSvgDarkActive = styled(ShuffleIcon)`
  width: 22px;
  height: 14px;
  fill: transparent;
  stroke: #ffffff;
`

export const ShuffleIconSvgLight = styled(ShuffleIcon)`
  width: 22px;
  height: 14px;
  fill: transparent;
  stroke: #B1B1B1;

  &:hover {
    stroke: #707070;
  }
`

export const ShuffleIconSvgLightActive = styled(ShuffleIcon)`
  width: 22px;
  height: 14px;
  fill: transparent;
  stroke: #000000;
`
