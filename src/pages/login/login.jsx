import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import * as S from '../register/registerStyle'
import logo from '../../img/logoblack.png'
import { LogoImageNavigation } from '../../components/navigation/navigationStyle'

export const Login = () => {
  const { setCurrentUser } = useContext(AuthContext)

  function handleSubmit(event) {
    event.preventDefault()
    console.log(event.target[0].value)
    console.log(event.target[1].value)
    const token = event.target[0].value + event.target[1].value
    setCurrentUser(token)
  }

  return (
    <S.ContainerRegister>
      <S.FormRegister action="" onSubmit={handleSubmit}>
        <LogoImageNavigation src={logo} alt="logo" />
        <S.InputRegister type="text" placeholder="Логин" />
        <S.InputRegister type="password" placeholder="Пароль" />
        <S.ButtonRegister type="submit">Войти</S.ButtonRegister>
        <S.LinkToRegister to="/register">Зарегистрироваться</S.LinkToRegister>
      </S.FormRegister>
    </S.ContainerRegister>
  )
}
