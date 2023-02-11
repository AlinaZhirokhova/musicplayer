import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './globalstyle.jsx'
import './css/style.scss'
import { AuthContextProvider } from './context/AuthContext'

const wrapper = ReactDOM.createRoot(document.querySelector('.wrapper'))
wrapper.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
)
