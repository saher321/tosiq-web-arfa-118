import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router'
import { ALL_USERS_API } from '../utils/apis.js'

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
