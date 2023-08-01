import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import './Firebase/firebase-config.js'
import axios from 'axios'

import { Provider } from 'react-redux'
import store from './redux/store.js'


//esto es par trabajar de forma local


axios.defaults.baseURL = 'http://localhost:3001'

//esto es para trabajar de forma deployada
  
// axios.defaults.baseURL = 'https://humanconet.adaptable.app/'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
)
