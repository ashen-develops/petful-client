import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from './Context/context'

ReactDOM.render(
    <BrowserRouter>
        <AppContextProvider>
            <App />
        </AppContextProvider>
            
    </BrowserRouter>,
    document.getElementById('root')
);
