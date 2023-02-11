import React from 'react'
import logo from '../../img/logo.png'
const { useState } = React
import * as S from './navigationStyle.jsx'


export const Navigation = () => {
    const [visible, setVisible] = useState(true)
    const toggleVisibility = () => setVisible(!visible)

    return (
      <S.MainNavigation>
        <S.LogoNavigationDiv>
            <S.LogoNavigation to="/">
              <S.LogoImageNavigation src={logo} alt="logo" />
          </S.LogoNavigation>
        </S.LogoNavigationDiv>
          
          <S.BurgerNavigation onClick={toggleVisibility}>
              <S.BurgerLine></S.BurgerLine>
              <S.BurgerLine></S.BurgerLine>
              <S.BurgerLine></S.BurgerLine>
          </S.BurgerNavigation>
          {visible || (
          <S.MenuNavigation>
              <S.MenuListNavigation>
                  <S.MenuItemNavigation>
                      <S.MenuLinkNavigation to="/">Главное</S.MenuLinkNavigation>
                  </S.MenuItemNavigation>
                  <S.MenuItemNavigation>
                      <S.MenuLinkNavigation to="/mytracks">Мой плейлист</S.MenuLinkNavigation>
                    </S.MenuItemNavigation>
                  <S.MenuItemNavigation>
                      <S.MenuLinkNavigation to="/">Войти</S.MenuLinkNavigation>
                  </S.MenuItemNavigation>
              </S.MenuListNavigation>
          </S.MenuNavigation>)}
      </S.MainNavigation>
    )
  }