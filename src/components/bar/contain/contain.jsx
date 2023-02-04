import {ReactComponent as NoteIcon} from '../../../img/icon/note.svg'
import * as S from './containStyle.jsx'

export const Contain = () => {
  return (
    <S.ContainTrackPlay>
      <S.ImageTrackPlay>
        <NoteIcon className="track-play__svg" alt="music" />
      </S.ImageTrackPlay>
      <S.AuthorTrackPlay>
        <S.AuthorLinkTrackPlay href="http://">
          Ты та...
        </S.AuthorLinkTrackPlay>
      </S.AuthorTrackPlay>
      <S.AlbumTrackPlay>
        <S.AlbumLinkTrackPlay href="http://">
          Баста
        </S.AlbumLinkTrackPlay>
      </S.AlbumTrackPlay>
    </S.ContainTrackPlay>
  )
}
