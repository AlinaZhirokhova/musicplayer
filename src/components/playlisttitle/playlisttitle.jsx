import * as S from './playlisttitleStyle.jsx'

export const PlaylistTitle = () => {
    return (
      <S.PlaylistTitle>
        <S.PlaylistTitleCol01>Трек</S.PlaylistTitleCol01>
        <S.PlaylistTitleCol02>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol02>
        <S.PlaylistTitleCol03>АЛЬБОМ</S.PlaylistTitleCol03>
        <S.PlaylistTitleCol04>
          <S.WatchSvg alt="time"/>
        </S.PlaylistTitleCol04>
      </S.PlaylistTitle>
    )
}