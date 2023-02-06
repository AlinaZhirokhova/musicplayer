import styled from 'styled-components'
import { ReactComponent as VolumeIcon } from '../../../img/icon/volume.svg'

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

export const ProgressLineVolume = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: white;

  &::-webkit-slider-runnable-track {
    height: 2px;
    width: 80px;
    background-color: white;
  }
  &::-webkit-slider-thumb {
    background: #1C1C1C;
    border: 2px solid white;
    border-radius: 100%;
    cursor: pointer;
    width: 15px;
    height: 15px;
    -webkit-appearance: none;
    margin-top: -6px;
  }
  &::-moz-range-track {
    height: 2px;
    width: 80px;
    background-color: white;
  }
  &::-moz-range-thumb {
    background: #1C1C1C;
    border: 2px solid white;
    border-radius: 100%;
    cursor: pointer;
  }
`

export const VolumeIconSvg = styled(VolumeIcon)`
  width: 13px;
  height: 18px;
  fill: transparent;
`
