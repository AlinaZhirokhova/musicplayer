import styled from 'styled-components'
import { ReactComponent as Watch } from '../../img/icon/watch.svg'

export const PlaylistTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`

export const PlaylistTitleCol = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
`
export const PlaylistTitleCol01 = styled(PlaylistTitleCol)`
  width: 447px;
`

export const PlaylistTitleCol02 = styled(PlaylistTitleCol)`
  width: 321px;
`

export const PlaylistTitleCol03 = styled(PlaylistTitleCol)`
  width: 245px;
`

export const PlaylistTitleCol04 = styled(PlaylistTitleCol)`
  width: 60px;
  text-align: end;
`

export const WatchSvg = styled(Watch)`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`
