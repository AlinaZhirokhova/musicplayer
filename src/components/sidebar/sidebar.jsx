import img1 from '../../img/playlist01.png'
import img2 from '../../img/playlist02.png'
import img3 from '../../img/playlist03.png'
import * as S from './sidebarStyle.jsx'
import { SkeletonSidebar } from '../skeletonSidebar/skeletonSidebar'
import { useState } from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export const Sidebar = () => {
  const [isLoading, setIsLoading] = useState(true)
  setTimeout(() => {
    setIsLoading(false)
  }, 2000)

  const { currentTheme } = useContext(ThemeContext)
  let styleName = {
    color: currentTheme ? '#000000' : '#ffffff'
  }

  return (
    <S.MainSidebar>
      <S.Personal>
        <S.PersonalName style={styleName}>Sergey.Ivanov</S.PersonalName>
        <S.Avatar></S.Avatar>
      </S.Personal>
      <S.BlockSidebar>
        {isLoading ? (
          <SkeletonSidebar />
        ) : (
          <S.ListSidebar>
            <S.ItemSidebar>
              <S.LinkSidebar to="/dayplaylist">
                <S.ImgSidebar src={img1} alt="day's playlist" />
              </S.LinkSidebar>
            </S.ItemSidebar>
            <S.ItemSidebar>
              <S.LinkSidebar to="/dancetracks">
                <S.ImgSidebar src={img2} alt="day's playlist" />
              </S.LinkSidebar>
            </S.ItemSidebar>
            <S.ItemSidebar>
              <S.LinkSidebar to="/indi">
                <S.ImgSidebar src={img3} alt="day's playlist" />
              </S.LinkSidebar>
            </S.ItemSidebar>
          </S.ListSidebar>
        )}
      </S.BlockSidebar>
    </S.MainSidebar>
  )
}
