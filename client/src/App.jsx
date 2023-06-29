import React from 'react'
import Navbar from './pages/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
const App = () => {
  return (
    <>
        <Navbar/>
        <Routes>
          <Route index  element={<Home/>}/>
        </Routes>
    </>
  )
}

export default App