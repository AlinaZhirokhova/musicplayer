import { useEffect } from 'react'
import { useState } from 'react'

export const Filter = () => {
  const [tracks, setTracks] = useState([])
  const [authorArr, setAuthorArr] = useState([])
  const [genreArr, setGenreArr] = useState([])
  const [filter,setFilter] = useState('')
  

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


  function handleClick (event) {
    setFilter(event.target.dataset.type)
  }

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div className="filter__button button-author _btn-text" onClick = {handleClick} data-type = 'author'>исполнителю
      <div className="popup__filter">
        <span>Lorem1</span>
        <span>Lorem2</span>
        <span>Lorem3</span>
      </div>
      </div>
      <div className="filter__button button-year _btn-text" onClick = {handleClick} data-type = 'year'>году выпуска</div>
      <div className="filter__button button-genre _btn-text" onClick = {handleClick} data-type = 'genre'>жанру</div>
    </div>
  )
}
