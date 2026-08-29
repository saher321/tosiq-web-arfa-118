import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router'
import { ALL_USERS_API, DEL_USER_API } from '../utils/apis.js'
import toast from 'react-hot-toast'

const Users = () => {
  const [users, setUsers] = useState([])

  const getAllUsers = async () => {
    try {
      const response = await axios.get(ALL_USERS_API)
      console.log(response)
      if (response.data.status) {
        setUsers(response.data.users)
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  const handleDelete = async (id) => {
    if (!id) {
      toast.error("ID not found")
      return;
    }

    try {
      const response = await axios.delete(DEL_USER_API + "/" + id)
      if (response.data.status == true) {
        toast.success(response.data.message)
        setUsers(response.data.users)
      } else {        
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error("Internal server error")
      throw new Error(error)
    }
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <div>
      <h2>Users list</h2>
      <Link to={'/users/add'}>Add new user</Link>

      <table border={"1"} cellSpacing={"0"} cellPadding={"15"} width={"100%"}>
        <thead>
          <tr>
            <th>Sr#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, i) => {
              return (
                <tr key={i}>
                  <td>{i+1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.status}</td>
                  <td> <Link onClick={() => handleDelete(user._id)}>Delete</Link> </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Users
