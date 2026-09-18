import React from 'react'
import useAuth from '../store/useAuth'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoutes = () => {
    const isAuthenticated = useAuth(state => state.isAuthenticated)
    return isAuthenticated ? <Outlet /> :
    <Navigate to={'/auth/login'} />
}

export default ProtectedRoutes
