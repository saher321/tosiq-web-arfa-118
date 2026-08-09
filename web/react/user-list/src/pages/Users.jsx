import React, { useEffect, useState } from 'react'
import WebLayout from '../layouts/WebLayout'
import axios from 'axios'
import { USERS_API } from '../utils/apis.js'
import UserItem from '../components/UserItem.jsx'

const Users = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getUsers = async () => {
    try {
      setIsLoading(true)
      const response = await axios.get(USERS_API)
      if (response.data.users && response.data.users.length > 0) {
        setUsers(response.data.users)
      setIsLoading(false)
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  // if (isLoading) {
  //   return <div>User list is loading</div>
  // }

  return (
    <WebLayout>
      <div>
        { isLoading && 
        <div className='font-bold text-center my-10'> User list is loading... </div> 
        }
        <div className='grid grid-cols-12 gap-4'>
          {
            users.map((user, i) => {
              return (
                <div key={i} className='col-span-12 lg:col-span-4 md:col-span-6 sm:col-span-6'>
                  <UserItem user={user} />  
                </div>
              )
            })
          }

        </div>
      </div>
    </WebLayout>
  )
}

export default Users
