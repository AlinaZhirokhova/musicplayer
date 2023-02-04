import styled from 'styled-components'

export const Filter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 51px;
`

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`

export const FilterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  position: relative;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }

  &:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }
`

export const PopupFilter = styled.div`
  position: absolute;
  width: 248px;
  height: 305px;
  left: 0;
  top: 48px;
  border-radius: 12px;
  padding: 34px;
  font-size: 22px;
  background-color: #313131;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  overflow-y: scroll;

  & span {
    color: white;
  }

  & span:hover {
    color: #b672ff;
    text-decoration: underline;
  }
`

export const PopupFilterYear = styled.div`
  position: absolute;
  width: 403px;
  height: 92px;
  left: 0;
  top: 48px;
  border-radius: 12px;
  padding: 34px;
  font-size: 20px;
  background-color: #313131;
  display: flex;
  flex-direction: now;
  align-items: center;
  gap: 10px;
  color: white;
  cursor: default;
`

export const PopupFilterYearNew = styled.input`
  accent-color: white;
  cursor: pointer;
`
