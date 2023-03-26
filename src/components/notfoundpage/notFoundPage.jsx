import * as S from './notFoundPageStyle.jsx'
import { Link } from "react-router-dom"

export const NotFoundPage = () => {
    return (
        <S.NotFoundPage>
            <h1>404</h1>
            <h2>Страница не найдена</h2>
            <p>Возможно, она была удалена или перенесена на другой адрес</p>
            <Link to="/">Вернуться на главную</Link>
        </S.NotFoundPage>
    )
}