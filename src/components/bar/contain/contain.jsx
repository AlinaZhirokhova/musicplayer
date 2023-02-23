import * as S from './containStyle.jsx'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

export const Contain = () => {
  const { currentTheme } = useContext(ThemeContext)
  let styles = {
    color: currentTheme ? '#000000' : '#ffffff',
  }

  let stylesImg = {
    backgroundColor: currentTheme ? '#F6F4F4' : '#313131',
  }

  return (
    <S.ContainTrackPlay>
      <S.ImageTrackPlay style={stylesImg}>
        <S.NoteIconSvg alt="music" />
      </S.ImageTrackPlay>
      <S.AuthorTrackPlay>
        <S.AuthorLinkTrackPlay style={styles} href="http://">
          Ты та...
        </S.AuthorLinkTrackPlay>
      </S.AuthorTrackPlay>
      <S.AlbumTrackPlay>
        <S.AlbumLinkTrackPlay style={styles} href="http://">Баста</S.AlbumLinkTrackPlay>
      </S.AlbumTrackPlay>
    </S.ContainTrackPlay>
  )
}
