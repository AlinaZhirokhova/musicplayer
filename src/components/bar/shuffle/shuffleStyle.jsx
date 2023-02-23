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

  &:active {
    stroke: #ffffff;
  }
`

export const ShuffleIconSvgLight = styled(ShuffleIcon)`
  width: 22px;
  height: 14px;
  fill: transparent;
  stroke: #B1B1B1;

  &:hover {
    stroke: #707070;
  }

  &:active {
    stroke: #000000;
  }
`
