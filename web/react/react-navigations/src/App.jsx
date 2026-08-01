import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import ContactUs from './pages/ContactUs'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App