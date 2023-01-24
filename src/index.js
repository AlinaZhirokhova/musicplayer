import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";

const wrapper = ReactDOM.createRoot(document.querySelector('.wrapper'))
wrapper.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
)