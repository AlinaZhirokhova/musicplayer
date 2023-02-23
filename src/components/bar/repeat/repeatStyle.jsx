import styled from 'styled-components'
import { Icon } from '../barStyled.jsx'
import { ReactComponent as RepeatIcon } from '../../../img/icon/repeat.svg'

export const RepeatPlayer = styled(Icon)`
  margin-right: 24px;
`

export const RepeatIconSvgDark = styled(RepeatIcon)`
  width: 20px;
  height: 15px;
  fill: transparent;
  stroke: #696969;

  &:hover {
    stroke: #ACACAC;
  }

  &:active {
    stroke: #ffffff;
  }
`

export const RepeatIconSvgLight = styled(RepeatIcon)`
  width: 20px;
  height: 15px;
  fill: transparent;
  stroke: #B1B1B1;

  &:hover {
    stroke: #707070;
  }

  &:active {
    stroke: #000000;
  }
`
