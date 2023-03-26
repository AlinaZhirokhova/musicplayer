import { Navigation } from '../../components/navigation/navigation.jsx'
import { Search } from '../../components/search/search.jsx'
import * as S from '../../AppStyle.jsx'
import { NotFoundPage } from '../../components/notfoundpage/notFoundPage.jsx'

export const NotFound = () => {
  return (
    <S.Container>
      <S.Main>
        <Navigation />
        <S.MainCenterBlock>
          <Search />
          <NotFoundPage />
        </S.MainCenterBlock>
      </S.Main>
      <S.Footer></S.Footer>
    </S.Container>
  )
}
