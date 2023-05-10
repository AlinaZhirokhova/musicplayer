import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './registerStyle.jsx'
import { LogoImageNavigation } from '../../components/navigation/navigationStyle'
import logo from '../../img/logoblack.png'
import axios from 'axios'

export const Register = () => {
  const [ body, setBody ] = useState(undefined)
  const navigate = useNavigate()
  
  useEffect(() => {
    const url = 'https://painassasin.online/user/signup/'
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }
    if (body!== undefined){
      axios.post(url, body, config).then((res) => {
      console.log(res)
      if (res.status == 201){
        navigate('/login')
      } else {
        alert("Произошла ошибка")
      }
    })
    } else {
      return
    }
  },[body])

  function handleSubmit(event) {
    event.preventDefault()
    const username = event.target[0].value
    const email = event.target[1].value
    const password = event.target[2].value
    
    if (password === event.target[3].value) {
      setBody({username, email, password})
    } else {
      alert('Пароли не совпадают. Попробуйте еще раз')
      setBody(undefined)
    }
  }

  return (
    <S.ContainerRegister>
      <S.FormRegister action="" onSubmit={handleSubmit}>
        <LogoImageNavigation src={logo} alt="logo" />
        <S.InputRegister type="text" placeholder="Логин"/>
        <S.InputRegister type="email" placeholder="Почта"/>
        <S.InputRegister type="password" placeholder="Пароль"/>
        <S.InputRegister type="password" placeholder="Повторите пароль"/>
        <S.ButtonRegister type="submit">Зарегистрироваться</S.ButtonRegister>
      </S.FormRegister>
    </S.ContainerRegister>
  )
}
