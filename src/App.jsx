import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home.jsx'
import Midterms from './pages/Midterms.jsx'
import Finals from './pages/Finals.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="main w-screen max-h-screen bg-linear-to-bl from-green1-cus to-green2-cus flex flex-col font-display overflow-auto">
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/midterms' element={<Midterms/>} />
          <Route path='/finals' element={<Finals/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
