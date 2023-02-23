import styled from 'styled-components'
import { NavLink } from "react-router-dom"
import { ReactComponent as ThemeIconDark } from '../../img/icon/darkTheme.svg'
import { ReactComponent as ThemeIconLight } from '../../img/icon/lightTheme.svg'

export const MainNavigation = styled.nav`
  width: 244px;
  background-color: #181818;
  padding: 20px 0 20px 36px;
`

export const LogoNavigation = styled(NavLink)`
  // width: 113.33px;
  // height: 43px;
  // padding: 13px 0 13px 0;
  // background-color: transparent;
  // margin-bottom: 20px;
`

export const LogoNavigationDiv = styled.div`
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
`

export const LogoImageNavigation = styled.img`
  width: 113.33px;
  height: 17px;
  color: #181818;
`
export const BurgerNavigation = styled.div`
  width: 20px;
  height: 36px;
  padding: 13px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const BurgerLine = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #d3d3d3;
`

export const MenuNavigation = styled.div`
  display: block;
  visibility: visible;
`

export const MenuListNavigation = styled.ul`
  padding: 18px 0 10px 0;
`

export const MenuItemNavigation = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
`

export const MenuLinkNavigation = styled(NavLink)`
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`

export const ThemeIconSvgDark = styled(ThemeIconDark)`
  width: 39px;
  height: 39px;
  stroke: #ffffff;
  fill: transparent;
  cursor: pointer;
`

export const ThemeIconSvgLight = styled(ThemeIconLight)`
  width: 39px;
  height: 39px;
  stroke: #000000;
  fill: transparent;
  cursor: pointer;
`