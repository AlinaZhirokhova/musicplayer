import styled from 'styled-components'

export const BtnIcon = styled.div`
  &:hover svg {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
  &:active svg {
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }
  &:active {
    fill: #696969;
    stroke: #ffffff;
    cursor: pointer;
  }
`

export const DislikeTrackPlay = styled(BtnIcon)`
  margin-left: 28.5px;
  padding: 5px;
`
