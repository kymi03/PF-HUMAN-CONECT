import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import './Firebase/firebase-config.js'
import axios from 'axios'

import { Provider } from 'react-redux'
import store from './redux/store.js'


axios.defaults.baseURL = 'http://localhost:3001'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
)
