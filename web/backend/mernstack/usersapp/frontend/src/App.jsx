import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Users from './pages/Users'
import AddUser from './pages/AddUser'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/users/add' element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
