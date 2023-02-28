// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './globalstyle.jsx'
import './css/style.scss'
import { AuthContextProvider } from './context/AuthContext'
import { ThemeContextProvider } from './context/ThemeContext'
import { PlayingContextProvider } from './context/PlayingContext'

const wrapper = ReactDOM.createRoot(document.querySelector('.wrapper'))
wrapper.render(
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
)
