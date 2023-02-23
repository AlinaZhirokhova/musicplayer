import React from 'react'
import logoDark from '../../img/logo.png'
import logoLight from '../../img/logoblack.png'
const { useState } = React
import * as S from './navigationStyle.jsx'
import { Theme } from './theme/theme'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export const Navigation = () => {
  const [visible, setVisible] = useState(true)
  const toggleVisibility = () => setVisible(!visible)

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
              <S.MenuLinkNavigation style={styleLink} to="/login">Войти</S.MenuLinkNavigation>
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
