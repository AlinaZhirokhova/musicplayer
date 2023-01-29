import { useEffect } from 'react'
import { useState } from 'react'
import * as S from './filterStyle.jsx'

export const Filter = () => {
  const [tracks, setTracks] = useState([])
  const [authorArr, setAuthorArr] = useState([])
  const [genreArr, setGenreArr] = useState([])
  const [filter, setFilter] = useState('')
  const [popupHtml, setPopupHtml] = useState([])
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
  console.log(authorArr)
  console.log(genreArr)
  console.log(filter)
  console.log(popupHtml)
  
  useEffect(() => {
    if (filter === 'author') {
      setPopupHtml(Array.from(authorArr))
    } else if (filter === 'genre') {
      setPopupHtml(Array.from(genreArr))
    }
  }, [filter])

  function handleClick(event) {
    setFilter(event.target.dataset.type)
  }

  return (
    <S.Filter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <S.FilterButton onClick={handleClick} data-type="author">
        исполнителю
        {/* <div className="filter__button button-author _btn-text" onClick = {handleClick} data-type = 'author'>исполнителю */}
        {filter == 'author' && <S.PopupFilter>
          {popupHtml.map((item) => {
            return <span key='1'>{item}</span>
          })}
        </S.PopupFilter>}
      </S.FilterButton>
      <S.FilterButton onClick={handleClick} data-type="year">
        году выпуска
      </S.FilterButton>
      <S.FilterButton onClick={handleClick} data-type="genre">
        жанру
        {filter == 'genre' && <S.PopupFilter>
          {popupHtml.map((item) => {
            return <span key='1'>{item}</span>
          })}
        </S.PopupFilter>}
      </S.FilterButton>

    </S.Filter>
  )
}
