import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './globalstyle.jsx'
import './css/style.scss'

const wrapper = ReactDOM.createRoot(document.querySelector('.wrapper'))
wrapper.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
