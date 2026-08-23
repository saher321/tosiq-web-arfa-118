import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const App = () => {
  const [users, setUsers] = useState([])

  const getAllUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/users")
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

export default App
