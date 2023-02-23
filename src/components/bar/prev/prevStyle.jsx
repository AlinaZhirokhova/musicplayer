import styled from 'styled-components'
import { ReactComponent as PrevIcon } from '../../../img/icon/prev.svg'

export const PrevPlayer = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  margin-right: 23px;
`

export const PrevIconSvgDark = styled(PrevIcon)`
  width: 15px;
  height: 14px;
  stroke: #D9D9D9;
  fill: #D9D9D9;
`

export const PrevIconSvgLight = styled(PrevIcon)`
  width: 15px;
  height: 14px;
  stroke: #B1B1B1;
  fill: #B1B1B1;
`
