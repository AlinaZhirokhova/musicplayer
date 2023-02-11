import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import * as S from './registerStyle.jsx'
import { LogoImageNavigation } from '../../components/navigation/navigationStyle'
import logo from '../../img/logoblack.png'

export const Register = () => {
  const { setCurrentUser } = useContext(AuthContext)
  const navigate = useNavigate()
  function handleSubmit(event) {
    event.preventDefault()
    console.log(event.target[0].value)
    console.log(event.target[1].value)
    console.log(event.target[2].value)
    if (event.target[1].value === event.target[2].value) {
      const token =
        event.target[0].value + event.target[1].value + event.target[2].value
      localStorage.setItem('token', token)
      setCurrentUser(token)
      navigate('/')
    } else {
      alert('Пароли не совпадают. Попробуйте еще раз')
    }
  }
  return (
    <S.ContainerRegister>
      <S.FormRegister action="" onSubmit={handleSubmit}>
        <LogoImageNavigation src={logo} alt="logo" />
        <S.InputRegister type="text" placeholder="Логин"/>
        <S.InputRegister type="password" placeholder="Пароль"/>
        <S.InputRegister type="password" placeholder="Повторите пароль"/>
        <S.ButtonRegister type="submit">Зарегистрироваться</S.ButtonRegister>
      </S.FormRegister>
    </S.ContainerRegister>
  )
}
