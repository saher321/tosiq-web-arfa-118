import React, { useEffect, useState } from "react";
import axios from "axios";
import { USER_API } from './utils/urls.js'

const App = () => {
  const [counter, setCounter] = useState(1)
  const [users, setUsers] = useState([])

  const count = () => {
    setCounter(counter + 1)
  }

  useEffect(() => {
    console.log("Runs on every call")
  })

  useEffect(() => {
    console.log("Runs only when page loading")
  }, [])

  useEffect(() => {
    if (counter == 5) {
      console.log("Counter value is limited")
    }
  }, [counter])

  const getUsers = async () => {
    const response = await axios.get(USER_API)
    // const response = await fetch(USER_API, 
    //   {
    //     method: "Post",
    //     body: "form value"
    //   }
    // )
    // const result = await response.json()
    // console.log(result)
    console.log(response.data, response.status)
    if (response.status == 200) {
      setUsers(response.data.users)
    }
    
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
  <div>
    <h1>useEffect()</h1>
    <button onClick={count}>
      Click me [{counter}]
    </button>
    <hr />

    <div>
      <h1>User's List</h1>
      <ol>
        {users.map((user, i) => {
          return (
            <li key={i}>{user.firstName} {user.lastName}</li>
          )
        })}
      </ol>
    </div>
  </div>
  )
}

export default App

// Get          => fetch
// Post         => send data to server
// Delete       => delete data from database
// Patch / Put  => data update
