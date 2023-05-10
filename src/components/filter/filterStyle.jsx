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

export const FilterButton = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border-radius: 60px;
  padding: 6px 20px;
  position: relative;
  background-color: transparent;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    border: 1px solid #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }

  &:active {
    border: 1px solid #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }
`

export const FilterButtonDark = styled.button.attrs((props) => ({
  className: props.className,
}))`
  &.active {
    border: 1px solid #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }

  font-style: normal;
  font-weight: 400;
  width: 144px;
  height: 39px;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  position: relative;
  background: transparent;
  color: #ffffff;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    border: 1px solid #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
`

export const FilterButtonLight = styled.button.attrs((props) => ({
  className: props.className,
}))`
  &.active {
    border: 1px solid #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  width: 144px;
  height: 39px;
  line-height: 24px;
  border: 1px solid #000000;
  border-radius: 60px;
  position: relative;
  background: transparent;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    border: 1px solid #580ea2;
    color: #580ea2;
    cursor: pointer;
  }
`

export const PopupFilterLight = styled.div`
  position: absolute;
  width: 248px;
  height: 305px;
  left: 0;
  top: 48px;
  border-radius: 12px;
  padding: 34px;
  font-size: 20px;
  background-color: #d9d9d9;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 10px;
  overflow-y: scroll;

  & span {
    color: #000000;
  }
`

export const PopupFilterDark = styled.div`
  position: absolute;
  width: 248px;
  height: 305px;
  left: 0;
  top: 48px;
  border-radius: 12px;
  padding: 34px;
  font-size: 20px;
  background-color: #313131;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 10px;
  overflow-y: scroll;

  & span {
    color: #ffffff;
  }
`

export const PopupFilterYearDark = styled.div`
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
  color: #ffffff;
  cursor: default;
`

export const PopupFilterYearLight = styled.div`
  position: absolute;
  width: 403px;
  height: 92px;
  left: 0;
  top: 48px;
  border-radius: 12px;
  padding: 34px;
  font-size: 20px;
  background-color: #d9d9d9;
  display: flex;
  flex-direction: now;
  align-items: center;
  gap: 10px;
  color: #000000;
  cursor: default;
`

export const PopupFilterYearNew = styled.input`
  accent-color: white;
  cursor: pointer;
`

export const PopupFilterSpan = styled.span.attrs((props) => ({
  className: props.className,
}))`
  &.active {
    color: #b672ff;
    text-decoration: underline;
  }
`

