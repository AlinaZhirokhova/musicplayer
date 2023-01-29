import {ReactComponent as SearchIcon} from '../../img/icon/search.svg'
import * as S from './searchStyled'

export const Search = () => {
    return (
      <S.SearchContainer>
        <SearchIcon className="search__svg"/>
        <S.SearchText
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </S.SearchContainer>
    )
}