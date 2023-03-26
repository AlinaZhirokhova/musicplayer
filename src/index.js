// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './globalstyle.jsx'
import './css/style.scss'
import { AuthContextProvider } from './context/AuthContext'
import { ThemeContextProvider } from './context/ThemeContext'
import { PlayingContextProvider } from './context/PlayingContext'
import { store } from './redux/store'
import { Provider } from 'react-redux'

const wrapper = ReactDOM.createRoot(document.querySelector('.wrapper'))
wrapper.render(
  <Provider store={store}>
    <ThemeContextProvider>
      <AuthContextProvider>
        <PlayingContextProvider>
          <BrowserRouter>
            <GlobalStyle />
            <App />
          </BrowserRouter>
        </PlayingContextProvider>
      </AuthContextProvider>
    </ThemeContextProvider>
  </Provider>
)


