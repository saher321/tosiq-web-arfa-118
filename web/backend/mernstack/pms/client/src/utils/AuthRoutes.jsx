import React from 'react'
import useAuth from '../store/useAuth'
import { Navigate, Outlet } from 'react-router'

const AuthRoutes = () => {
    const isAuthenticated = useAuth(state => state.isAuthenticated)
    return isAuthenticated ?
    <Navigate to={'/'} /> :
    <Outlet />
}

export default AuthRoutes
