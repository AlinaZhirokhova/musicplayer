import styled from 'styled-components'
import { ReactComponent as NoteIcon } from '../../../img/icon/note.svg'

export const ContainTrackPlay = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image author' 'image album';
  align-items: center;
`

export const ImageTrackPlay = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  grid-area: image;
`

export const AuthorTrackPlay = styled.div`
  grid-area: author;
  width: 150px;
`

export const AuthorLinkTrackPlay = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  white-space: nowrap;
  width: 100px;
`

export const AlbumTrackPlay = styled.div`
  grid-area: album;
  width: 150px;
`

export const AlbumLinkTrackPlay = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #ffffff;
`

export const NoteIconSvg = styled(NoteIcon)`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`
