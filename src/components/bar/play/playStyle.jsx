import styled from 'styled-components'
import { ReactComponent as PlayIcon } from '../../../img/icon/play.svg'
import { ReactComponent as StopIcon } from '../../../img/icon/stop.svg'

export const PlayPlayer = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  margin-right: 23px;
`

export const PlayIconSvg = styled(PlayIcon)`
  width: 22px;
  height: 20px;
  fill: #d9d9d9;
`

export const StopIconSvg = styled(StopIcon)`
  width: 22px;
  height: 20px;
  fill: #d9d9d9;
`
