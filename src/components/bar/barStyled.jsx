import styled from 'styled-components'
import { ReactComponent as PlayIcon } from '../../img/icon/play.svg'
import { ReactComponent as StopIcon } from '../../img/icon/stop.svg'

export const BarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`

export const Icon = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
`

export const ContentBar = styled.div`
  display: flex;
  flex-direction: column;
`
export const PlayerBlockBar = styled.div`
  height: 73px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const PlayerPlayerBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const PlayerTrackPlay = styled.div`
  display: flex;
  flex-direction: row;
`

export const LikeDisTrackPlay = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 26%;
`

export const ProgressBar = styled.input`
  width: 100%;
  height: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #2E2E2E;

  &::-webkit-slider-thumb {
    background: #AD61FF;
    width: 5px;
    height: 5px;
    cursor: pointer;
    -webkit-appearance: none;
  }
  
  &::-moz-range-thumb {
    background: #AD61FF;
    width: 5px;
    height: 5px;
    cursor: pointer;
    -webkit-appearance: none;
  }
`

export const ProgressBarLight = styled.input`
  width: 100%;
  height: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &::-webkit-slider-runnable-track {
    background-color: #D9D9D9;
  }

  &::-webkit-slider-thumb {
    background: #AD61FF;
    width: 5px;
    height: 5px;
    cursor: pointer;
    -webkit-appearance: none;
  }

  &::-moz-range-track {
    background-color: #2E2E2E;
  }

  &::-moz-range-thumb {
    background: #AD61FF;
    width: 5px;
    height: 5px;
    cursor: pointer;
    -webkit-appearance: none;
  }
`

export const ControlsPlayer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 27px 0 31px;
`

export const Play = styled.div`
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