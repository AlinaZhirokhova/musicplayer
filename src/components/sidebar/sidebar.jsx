import img1 from '../../img/playlist01.png'
import img2 from '../../img/playlist02.png'
import img3 from '../../img/playlist03.png'
import * as S from './sidebarStyle.jsx'
import { SkeletonSidebar } from '../skeletonSidebar/skeletonSidebar'
import { useState } from 'react'

export const Sidebar = () => {
  const [isLoading, setIsLoading] = useState(true)
  setTimeout(() => {
    setIsLoading(false)
  }, 2000)
  return (
    <S.MainSidebar>
      <S.Personal>
        <S.PersonalName>Sergey.Ivanov</S.PersonalName>
        <S.Avatar></S.Avatar>
      </S.Personal>
      <S.BlockSidebar>
        {isLoading ? (
          <SkeletonSidebar />
        ) : (
          <S.ListSidebar>
            <S.ItemSidebar>
              <S.LinkSidebar href="#">
                <S.ImgSidebar src={img1} alt="day's playlist" />
              </S.LinkSidebar>
            </S.ItemSidebar>
            <S.ItemSidebar>
              <S.LinkSidebar href="#">
                <S.ImgSidebar src={img2} alt="day's playlist" />
              </S.LinkSidebar>
            </S.ItemSidebar>
            <S.ItemSidebar>
              <S.LinkSidebar href="#">
                <S.ImgSidebar src={img3} alt="day's playlist" />
              </S.LinkSidebar>
            </S.ItemSidebar>
          </S.ListSidebar>
        )}
      </S.BlockSidebar>
    </S.MainSidebar>
  )
}
