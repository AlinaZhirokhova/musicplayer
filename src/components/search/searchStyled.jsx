import styled from 'styled-components'
import { ReactComponent as SearchIcon } from '../../img/icon/search.svg'

export const SearchTextDark = styled.input`
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  &::placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`

export const SearchTextLight = styled.input`
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;

  &::placeholder {
    background-color: transparent;
    color: #000000;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`

export const SearchContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid #4e4e4e;
  margin-bottom: 51px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const SearchIconSvg = styled(SearchIcon)`
  width: 17px;
  height: 17px;
  margin-right: 5px;
  margin-left: 10px;
  stroke: #ffffff;
  fill: transparent;
`
