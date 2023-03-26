import React from 'react'
import logoDark from '../../img/logo.png'
import logoLight from '../../img/logoblack.png'
const { useState } = React
import * as S from './navigationStyle.jsx'
import { Theme } from './theme/theme'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { useDispatch } from 'react-redux'
import { deleteToken } from '../../redux/Slices/userSlice'

export const Navigation = () => {
  const [visible, setVisible] = useState(true)
  const toggleVisibility = () => setVisible(!visible)
  const dispatch = useDispatch()

  const { currentTheme } = useContext(ThemeContext)
  let styleMain = {
    backgroundColor: currentTheme ? '#F6F5F3' : '#181818',
  }
  let styleLink = {
    color: currentTheme ? '#000000' : '#ffffff',
  }
  let styleBurgerLine = {
    backgroundColor: currentTheme ? '#000000' : '#d3d3d3'
  }

  function handleExit() {
    localStorage.removeItem('token')
    dispatch(deleteToken())
  }
 

  return (
    <S.MainNavigation style={styleMain}>
      <S.LogoNavigationDiv>
        <S.LogoNavigation to="/">
          <S.LogoImageNavigation src={currentTheme ? logoLight : logoDark} alt="logo" />
        </S.LogoNavigation>
      </S.LogoNavigationDiv>

      <S.BurgerNavigation onClick={toggleVisibility}>
        <S.BurgerLine style={styleBurgerLine}></S.BurgerLine>
        <S.BurgerLine style={styleBurgerLine}></S.BurgerLine>
        <S.BurgerLine style={styleBurgerLine}></S.BurgerLine>
      </S.BurgerNavigation>
      {visible || (
        <S.MenuNavigation>
          <S.MenuListNavigation>
            <S.MenuItemNavigation>
              <S.MenuLinkNavigation style={styleLink} to="/">Главное</S.MenuLinkNavigation>
            </S.MenuItemNavigation>
            <S.MenuItemNavigation>
              <S.MenuLinkNavigation style={styleLink} to="/mytracks">
                Мой плейлист
              </S.MenuLinkNavigation>
            </S.MenuItemNavigation>
            <S.MenuItemNavigation>
              <S.MenuLinkNavigation onClick={handleExit} style={styleLink} to="/login">Выйти</S.MenuLinkNavigation>
            </S.MenuItemNavigation>
            <S.MenuItemNavigation>
              <Theme />
            </S.MenuItemNavigation>
          </S.MenuListNavigation>
        </S.MenuNavigation>
      )}
    </S.MainNavigation>
  )
}
