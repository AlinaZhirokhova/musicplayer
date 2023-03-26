import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from '../register/registerStyle'
import logo from '../../img/logoblack.png'
import { LogoImageNavigation } from '../../components/navigation/navigationStyle'
import { useDispatch } from 'react-redux'
import { changeToken, setUserInfo } from '../../redux/Slices/userSlice'

export const Login = () => {
  const [ body, setBody ] = useState(undefined)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    const url = 'https://painassasin.online/user/login/'
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }
    if (body!== undefined){
      axios.post(url, body, config).then((res) => {
      if (res.status == 200){
        navigate('/')
      } else {
        alert("Произошла ошибка")
      }
    })
    } else {
      return
    }
  },[body])

  useEffect(() => {
    const url = 'https://painassasin.online/user/token/'
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }
    if (body!== undefined){
      axios.post(url, body, config).then((res) => {
      console.log(res)
      if (res.statusText == "OK"){
        navigate('/')
        localStorage.setItem("token", res.data.access)
        dispatch(changeToken(res.data.access))
        dispatch(setUserInfo(body))
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
    const email = event.target[0].value
    const password = event.target[1].value
    setBody({ email, password})

  }

  return (
    <S.ContainerRegister>
      <S.FormRegister action="" onSubmit={handleSubmit}>
        <LogoImageNavigation src={logo} alt="logo" />
        <S.InputRegister type="email" placeholder="Почта" />
        <S.InputRegister type="password" placeholder="Пароль" />
        <S.ButtonRegister type="submit">Войти</S.ButtonRegister>
        <S.LinkToRegister to="/register">Зарегистрироваться</S.LinkToRegister>
      </S.FormRegister>
    </S.ContainerRegister>
  )
}
