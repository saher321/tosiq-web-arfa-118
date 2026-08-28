import React, { useState } from 'react'
import { Link, replace, useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { ADD_USERS_API } from '../utils/apis.js'
import toast from 'react-hot-toast'

const AddUser = () => {

    const navigate = useNavigate()

    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: "",
            email: "",
            status: ""
        }
    })

    const addUser = async (data) => {
        try {
            const response = await axios.post(ADD_USERS_API, data)
            if (response.data.status == true) {
                toast.success(response.data.message)
                navigate('/', { replace: true })
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error("Internel server error")
            throw new Error(error)
        }
    }
  return (
    <div>
      <h2>Add User</h2>
      <Link to={'/'}>View all users</Link>

      <form onSubmit={handleSubmit(addUser)}>
        <table className='add-form-tbl'>
            <tr>
                <th align='left'>Full name:</th>
                <td>
                    <input 
                    { ...register("name") } 
                    type="text" 
                    placeholder='e.g: John Samith' />
                </td>
            </tr>
            <tr>
                <th align='left'>Email address:</th>
                <td>
                    <input
                    { ...register("email") }
                    type="email" 
                    placeholder='john.samith@email.com' />
                </td>
            </tr>
            <tr>
                <th align='left'>Status:</th>
                <td>
                    <select { ...register("status") } >
                        <option value="">--- Choose one option ---</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <input type="submit" value={"Add new user"} />
                </td>
            </tr>
        </table>
      </form>
    </div>
  )
}

export default AddUser
