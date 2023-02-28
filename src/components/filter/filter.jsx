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

    selectors.forEach((item) => {
      if (item.dataset.type !== event.target.dataset.type) {
        item.dataset.active = false
        item.classList.remove('active')
      } else if (item.dataset.type === event.target.dataset.type) {
        item.dataset.active = true
        item.classList.toggle('active')
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
          <S.PopupFilterLight>
            {popupHtml.map((item) => {
              return <span key={nanoid()}>{item}</span>
            })}
          </S.PopupFilterLight>
        )}
      </S.FilterButtonLight>
      <S.FilterButtonLight
        onClick={handleClick}
        data-type="year"
        data-active="false"
        data-delete={tracks}
      >
        году выпуска
        {filter.name == 'year' && filter.active == true && (
          <S.PopupFilterYearLight>
            <S.PopupFilterYearNew type="radio" name="year"/><label htmlFor="radio">Более новые</label>
            <S.PopupFilterYearNew type="radio" name="year"/><label htmlFor="radio">Более старые</label>
          </S.PopupFilterYearLight>
        )}
      </S.FilterButtonLight>
      <S.FilterButtonLight
        onClick={handleClick}
        data-type="genre"
        data-active="false"
      >
        жанру
        {filter.name == 'genre' && filter.active == true && (
          <S.PopupFilterLight>
            {popupHtml.map((item) => {
              return <span key={nanoid()}>{item}</span>
            })}
          </S.PopupFilterLight>
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
            <S.PopupFilterDark>
              {popupHtml.map((item) => {
                return <span key={nanoid()}>{item}</span>
              })}
            </S.PopupFilterDark>
          )}
        </S.FilterButtonDark>
        <S.FilterButtonDark
          onClick={handleClick}
          data-type="year"
          data-active="false"
        >
          году выпуска
          {filter.name == 'year' && filter.active == true && (
            <S.PopupFilterYearDark>
              <S.PopupFilterYearNew type="radio" name="year"/><label htmlFor="radio">Более новые</label>
              <S.PopupFilterYearNew type="radio" name="year"/><label htmlFor="radio">Более старые</label>
            </S.PopupFilterYearDark>
          )}
        </S.FilterButtonDark>
        <S.FilterButtonDark
          onClick={handleClick}
          data-type="genre"
          data-active="false"
        >
          жанру
          {filter.name == 'genre' && filter.active == true && (
            <S.PopupFilterDark>
              {popupHtml.map((item) => {
                return <span key={nanoid()}>{item}</span>
              })}
            </S.PopupFilterDark>
          )}
        </S.FilterButtonDark>
      </S.Filter>
    )
 }



}
