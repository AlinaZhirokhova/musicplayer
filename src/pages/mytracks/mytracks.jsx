import { Navigation } from '../../components/navigation/navigation.jsx'
import { Search } from '../../components/search/search.jsx'
import { Sidebar } from '../../components/sidebar/sidebar.jsx'
import { Bar } from '../../components/bar/bar.jsx'
import * as S from '../../AppStyle.jsx'

export const MyTracks = () => {
  return (
    <S.Container>
      <S.Main>
        <Navigation />
        <S.MainCenterBlock>
          <Search />
          <S.MainCenterBlockTitle>Мои треки</S.MainCenterBlockTitle>
        </S.MainCenterBlock>
        <Sidebar />
      </S.Main>
      <Bar />
      <S.Footer></S.Footer>
    </S.Container>
  )
}
