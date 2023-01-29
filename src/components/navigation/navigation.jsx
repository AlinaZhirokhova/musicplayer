import React from 'react'
import logo from '../../img/logo.png'
const { useState } = React
import * as S from './navigationStyle.jsx'

export const Navigation = () => {
    const [visible, setVisible] = useState(true)
    const toggleVisibility = () => setVisible(!visible)

    return (
      <S.MainNavigation>
          <S.LogoNavigation>
              <S.LogoImageNavigation src={logo} alt="logo" />
          </S.LogoNavigation>
          <S.BurgerNavigation onClick={toggleVisibility}>
              <S.BurgerLine></S.BurgerLine>
              <S.BurgerLine></S.BurgerLine>
              <S.BurgerLine></S.BurgerLine>
          </S.BurgerNavigation>
          {visible || (
          <S.MenuNavigation>
              <S.MenuListNavigation>
                  <S.MenuItemNavigation>
                      <S.MenuLinkNavigation href="http://">Главное</S.MenuLinkNavigation>
                  </S.MenuItemNavigation>
                  <S.MenuItemNavigation>
                      <S.MenuLinkNavigation href="http://">Мой плейлист</S.MenuLinkNavigation>
                    </S.MenuItemNavigation>
                  <S.MenuItemNavigation>
                      <S.MenuLinkNavigation href="http://">Войти</S.MenuLinkNavigation>
                  </S.MenuItemNavigation>
              </S.MenuListNavigation>
          </S.MenuNavigation>)}
      </S.MainNavigation>
    )
  }