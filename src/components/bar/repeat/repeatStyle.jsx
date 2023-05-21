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
    stroke: #acacac;
  }
`

export const RepeatIconSvgDarkActive = styled(RepeatIcon)`
  stroke: #ffffff;
  width: 20px;
  height: 15px;
  fill: transparent;
`

export const RepeatIconSvgLight = styled(RepeatIcon)`
  width: 20px;
  height: 15px;
  fill: transparent;
  stroke: #b1b1b1;

  &:hover {
    stroke: #707070;
  }
`

export const RepeatIconSvgLightActive = styled(RepeatIcon)`
  width: 20px;
  height: 15px;
  fill: transparent;
  stroke: #000000;
`
