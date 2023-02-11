import * as S from './notFoundPageStyle.jsx'

export const NotFoundPage = () => {
    return (
        <S.NotFoundPage>
            <h1>404</h1>
            <h2>Страница не найдена</h2>
            <p>Возможно, она была удалена или перенесена на другой адрес</p>
            <button>Вернуться на главную</button>
        </S.NotFoundPage>
    )
}