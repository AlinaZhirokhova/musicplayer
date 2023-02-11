import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const LinkToRegister = styled(NavLink)`
  width: 278px;
  height: 52px;
  background-color: #ffffff;
  color: #000000;
  border-radius: 6px;
  border: 1px solid #d0cece;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-top: -28px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #d9d9d9;
  }

  &:active {
    background-color: #d0cece;
  }
`

export const ContainerRegister = styled.div`
  max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #181818;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FormRegister = styled.form`
  width: 366px;
  height: 439px;
  background-color: #ffffff;
  box-sizing: border-box;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`

export const ButtonRegister = styled.button`
  width: 278px;
  height: 52px;
  color: #ffffff;
  background-color: #580ea2;
  border: none;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;

  &:hover {
    background-color: #3f007d;
  }

  &:active {
    background-color: #271a58;
  }
`

export const InputRegister = styled.input`
  width: 278px;
  border: none;
  border-bottom: 1px solid #d0cece;
  outline: none;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  color: #181818;
  line-height: 24px;

  &::placeholder {
    color: #d0cece;
  }
`
