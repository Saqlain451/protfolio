import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './Styles/navbar.css'
import './Styles/box.css'
import './Styles/display.css'
import './Styles/font.css'
import {BrowserRouter as Router} from 'react-router-dom'
import { AppProvider } from './Hooks/Context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <Router>
      <App />
    </Router>
    </AppProvider>
)
