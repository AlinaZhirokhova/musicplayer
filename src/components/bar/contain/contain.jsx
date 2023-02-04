import * as S from './containStyle.jsx'

export const Contain = () => {
  return (
    <S.ContainTrackPlay>
      <S.ImageTrackPlay>
        <S.NoteIconSvg alt="music" />
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
