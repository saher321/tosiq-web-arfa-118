import React from 'react'
import useAuth from '../store/useAuth'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'
const Dashboard = () => {

  const logout = useAuth(state => state.logout)
  const user = useAuth(state => state.user)
  const isAuthenticated = useAuth(state => state.isAuthenticated)
  const navigate = useNavigate()

  const handleLogout = () => {
    toast.success("Account has been logged out")
    logout()
    navigate('/auth/login', { replace: true })
  }
  return (
    <div>
      Dashboard, {isAuthenticated && user.email} <br />
      <button className='hover:shadow-md bg-red-500 text-gray-100 py-1 px-3 rounded cursor-pointer' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard
