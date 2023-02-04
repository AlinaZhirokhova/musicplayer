import * as S from './searchStyled'

export const Search = () => {
    return (
      <S.SearchContainer>
        <S.SearchIconSvg />
        <S.SearchText
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </S.SearchContainer>
    )
}