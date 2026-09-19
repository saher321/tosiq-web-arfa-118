import React from 'react'
import useAuth from '../store/useAuth'
import AdminLayout from './AdminLayout'
import UserLayout from './UserLayout'

const RoleBasedLayout = ({ children }) => {

    const user = useAuth(state => state.user)
    return user.role == 'pm' ? 
    <AdminLayout>{children}</AdminLayout> :
    <UserLayout>{children}</UserLayout>
}

export default RoleBasedLayout