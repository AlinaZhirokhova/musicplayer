import styled from 'styled-components'
import { ReactComponent as PlayIcon } from '../../img/icon/play.svg'
import { ReactComponent as StopIcon } from '../../img/icon/stop.svg'
import { ReactComponent as VolumeIcon } from '../../img/icon/volume.svg'
import { ReactComponent as LikeIcon } from '../../img/icon/like.svg'
import { ReactComponent as DislikeIcon } from '../../img/icon/dislike.svg'

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
  gap: 20px;
`

export const ProgressBar = styled.input`
  width: 100%;
  height: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #2e2e2e;

  &::-webkit-slider-thumb {
    background: #ad61ff;
    width: 5px;
    height: 5px;
    cursor: pointer;
    -webkit-appearance: none;
  }

  &::-moz-range-thumb {
    background: #ad61ff;
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
    background-color: #d9d9d9;
  }

  &::-webkit-slider-thumb {
    background: #ad61ff;
    width: 5px;
    height: 5px;
    cursor: pointer;
    -webkit-appearance: none;
  }

  &::-moz-range-track {
    background-color: #2e2e2e;
  }

  &::-moz-range-thumb {
    background: #ad61ff;
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

export const BlockVolume = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  padding: 0 92px 0 0;
`

export const ContentVolume = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
`

export const ImageVolume = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 58px;
  fill: transparent;
`

export const ProgressVolume = styled.div`
  width: 109px;
  cursor: pointer;
  display: flex;
`

export const ProgressLineVolumeDark = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #ffffff;

  &::-webkit-slider-runnable-track {
    height: 2px;
    width: 80px;
    background-color: #ffffff;
  }
  &::-webkit-slider-thumb {
    background: #1C1C1C;
    border: 2px solid #ffffff;
    border-radius: 100%;
    cursor: pointer;
    width:15px;
    height: 15px;
    -webkit-appearance: none;
    margin-top: -6px;
  }
  &::-moz-range-track {
    height: 2px;
    width: 80px;
    background-color: #ffffff;
  }
  &::-moz-range-thumb {
    background: #1C1C1C;
    border: 2px solid #ffffff;
    border-radius: 100%;
    cursor: pointer;
  }
`

export const ProgressLineVolumeLight = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #C4C4C4;

  &::-webkit-slider-runnable-track {
    height: 2px;
    width: 80px;
    background-color: #C4C4C4;
  }
  &::-webkit-slider-thumb {
    background: #ffffff;
    border: 2px solid #C4C4C4;
    border-radius: 100%;
    cursor: pointer;
    width:15px;
    height: 15px;
    -webkit-appearance: none;
    margin-top: -6px;
  }
  &::-moz-range-track {
    height: 2px;
    width: 80px;
    background-color: #C4C4C4;
  }
  &::-moz-range-thumb {
    background: #1C1C1C;
    border: 2px solid #C4C4C4;
    border-radius: 100%;
    cursor: pointer;
  }
`

export const VolumeIconSvg = styled(VolumeIcon)`
  width: 13px;
  height: 18px;
  fill: transparent;
  margin-left: 50px;
`

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

export const LikeIconSvgDarkActive = styled(LikeIcon)`
  stroke: #ffffff;
  fill: #696969;
`

export const DislikeIconSvgDark = styled(DislikeIcon)`
  width: 14.34px;
  height: 13px;
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