import { useEffect } from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import * as S from './filterStyle.jsx'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export const Filter = () => {
  const [tracks, setTracks] = useState([])
  const [authorArr, setAuthorArr] = useState([])
  const [genreArr, setGenreArr] = useState([])
  const [filter, setFilter] = useState('')
  const [popupHtml, setPopupHtml] = useState([])
  const {currentTheme} = useContext(ThemeContext)
  // const [currentArr, setCurrentArr] = useState([])

  useEffect(() => {
    const getTracks = async () => {
      const res = await fetch('https://painassasin.online/catalog/track/all/')
      const response = await res.json()
      setTracks(response)
      setAuthorArr(
        new Set(
          response.map((obj) => {
            return obj.author
          })
        )
      )
      setGenreArr(
        new Set(
          response.map((obj) => {
            return obj.genre
          })
        )
      )
    }
    getTracks()
  }, [])

  console.log(tracks)
  // console.log(authorArr)
  // console.log(genreArr)
  // console.log(filter)
  // console.log(popupHtml)

  useEffect(() => {
    if (filter.name === 'author') {
      setPopupHtml(Array.from(authorArr))
    } else if (filter.name === 'genre') {
      setPopupHtml(Array.from(genreArr))
    }
  }, [filter])

  function handleClick(event) {
    const selectors = document.querySelectorAll('[data-type]')
    event.target.dataset.active = !JSON.parse(event.target.dataset.active)
    setFilter({
      name: event.target.dataset.type,
      active: JSON.parse(event.target.dataset.active),
    })

    if (!currentTheme) {
      event.target.classList.toggle('active-black')
    }

    // if (event.target.dataset.active === 'true' && !currentTheme) {
    //   event.target.style.color = '#ad61ff'
    //   event.target.style.borderColor = '#ad61ff'
    //   console.log("первый иф" + currentTheme + event.target.dataset.active)
    // } else if (event.target.dataset.active === 'false' && !currentTheme) {
    //   event.target.style.color = '#ffffff'
    //   event.target.style.borderColor = '#ffffff'
    //   console.log("второй иф" + currentTheme + event.target.dataset.active)
    // } 
    // else {
    //   event.target.style.color = '#ffffff'
    //   event.target.style.borderColor = '#ffffff'
    // }

    selectors.forEach((item) => {
      if (item.dataset.type !== event.target.dataset.type && currentTheme) {
        item.dataset.active = false
        item.style.color = '#000000'
        item.style.borderColor = '#000000'
      } else if (item.dataset.type === event.target.dataset.type && currentTheme) {
        item.dataset.active = true
        item.style.color = '#000000'
        item.style.borderColor = '#000000'
      }
    })
  }

  if (currentTheme) {
    return (
    <S.Filter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <S.FilterButtonLight
        onClick={handleClick}
        data-type="author"
        data-active="false"
      >
        исполнителю
        {filter.name == 'author' && filter.active == true && (
          <S.PopupFilter>
            {popupHtml.map((item) => {
              return <span key={nanoid()}>{item}</span>
            })}
          </S.PopupFilter>
        )}
      </S.FilterButtonLight>
      <S.FilterButtonLight
        onClick={handleClick}
        data-type="year"
        data-active="false"
      >
        году выпуска
        {filter.name == 'year' && filter.active == true && (
          <S.PopupFilterYear>
            <S.PopupFilterYearNew type="radio" name="year"/><label htmlFor="radio">Более новые</label>
            <S.PopupFilterYearNew type="radio" name="year"/><label htmlFor="radio">Более старые</label>
          </S.PopupFilterYear>
        )}
      </S.FilterButtonLight>
      <S.FilterButtonLight
        onClick={handleClick}
        data-type="genre"
        data-active="false"
      >
        жанру
        {filter.name == 'genre' && filter.active == true && (
          <S.PopupFilter>
            {popupHtml.map((item) => {
              return <span key={nanoid()}>{item}</span>
            })}
          </S.PopupFilter>
        )}
      </S.FilterButtonLight>
    </S.Filter>
  )

 } else {
      return (
      <S.Filter>
        <S.FilterTitle>Искать по:</S.FilterTitle>
        <S.FilterButtonDark
          onClick={handleClick}
          data-type="author"
          data-active="false"
        >
          исполнителю
          {filter.name == 'author' && filter.active == true && (
            <S.PopupFilter>
              {popupHtml.map((item) => {
                return <span key={nanoid()}>{item}</span>
              })}
            </S.PopupFilter>
          )}
        </S.FilterButtonDark>
        <S.FilterButtonDark
          onClick={handleClick}
          data-type="year"
          data-active="false"
        >
          году выпуска
          {filter.name == 'year' && filter.active == true && (
            <S.PopupFilterYear>
              <S.PopupFilterYearNew type="radio" name="year"/><label htmlFor="radio">Более новые</label>
              <S.PopupFilterYearNew type="radio" name="year"/><label htmlFor="radio">Более старые</label>
            </S.PopupFilterYear>
          )}
        </S.FilterButtonDark>
        <S.FilterButtonDark
          onClick={handleClick}
          data-type="genre"
          data-active="false"
        >
          жанру
          {filter.name == 'genre' && filter.active == true && (
            <S.PopupFilter>
              {popupHtml.map((item) => {
                return <span key={nanoid()}>{item}</span>
              })}
            </S.PopupFilter>
          )}
        </S.FilterButtonDark>
      </S.Filter>
    )
 }

   // function getTheme (Item) {
  //   return (
  //     <S.Filter>
  //       <S.FilterTitle>Искать по:</S.FilterTitle>
  //       <Item
  //         onClick={handleClick}
  //         data-type="author"
  //         data-active="false"
  //       >
  //         исполнителю
  //         {filter.name == 'author' && filter.active == true && (
  //           <S.PopupFilter>
  //             {popupHtml.map((item) => {
  //               return <span key={nanoid()}>{item}</span>
  //             })}
  //           </S.PopupFilter>
  //         )}
  //       </Item>
  //       <Item
  //         onClick={handleClick}
  //         data-type="year"
  //         data-active="false"
  //       >
  //         году выпуска
  //         {filter.name == 'year' && filter.active == true && (
  //           <S.PopupFilterYear>
  //             <S.PopupFilterYearNew type="radio" name="year"/><label htmlFor="radio">Более новые</label>
  //             <S.PopupFilterYearNew type="radio" name="year"/><label htmlFor="radio">Более старые</label>
  //           </S.PopupFilterYear>
  //         )}
  //       </Item>
  //       <Item
  //         onClick={handleClick}
  //         data-type="genre"
  //         data-active="false"
  //       >
  //         жанру
  //         {filter.name == 'genre' && filter.active == true && (
  //           <S.PopupFilter>
  //             {popupHtml.map((item) => {
  //               return <span key={nanoid()}>{item}</span>
  //             })}
  //           </S.PopupFilter>
  //         )}
  //       </Item>
  //     </S.Filter>
  //   )
  // }
  // if (currentTheme) {
  //   getTheme (S.FilterButtonLight)
  // } else {
  //   getTheme (S.FilterButtonDark)
  // }


}
