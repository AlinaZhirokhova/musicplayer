import styled from 'styled-components'

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
