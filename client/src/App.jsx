import React from 'react'
import Navbar from './pages/Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Footer from "./pages/Footer.jsx";

const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path={"*"} element={<Home/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App