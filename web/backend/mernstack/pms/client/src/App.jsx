import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Register from './pages/auth/Register'
import Dashboard from './pages/Dashboard'
import Login from './pages/auth/Login'
import ForgotPassword from './pages/auth/ForgotPassword'
import ResetPassword from './pages/auth/ResetPassword'
import ProtectedRoutes from './utils/ProtectedRoutes'
import AuthRoutes from './utils/AuthRoutes'
import Customers from './pages/customers/Customers'
import AddCustomer from './pages/customers/AddCustomer'
import EditCustomer from './pages/customers/EditCustomer'
import Projects from './pages/projects/Projects'
import AddProject from './pages/projects/AddProject'
import EditProject from './pages/projects/EditProject'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthRoutes />}>
          <Route path='/auth/register' element={<Register />} />
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/forgot-password' element={<ForgotPassword />} />
          <Route path='/auth/reset-password' element={<ResetPassword />} />
        </Route>

        
        <Route element={<ProtectedRoutes />}>
          <Route path='/' element={<Dashboard />}/>
          <Route path='/customers' element={<Customers />}/>
          <Route path='/customers/add' element={<AddCustomer />}/>
          <Route path='/customers/edit/:id' element={<EditCustomer />}/>
          
          <Route path='/projects' element={<Projects />}/>
          <Route path='/projects/add' element={<AddProject />}/>
          <Route path='/projects/edit/:id' element={<EditProject />}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
