import React from 'react'
import AuthLayout from '../../Layouts/AuthLayout'
import { Divider, InputField, SimpleButton } from '../../components/ComponentLib'
import { Link, useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import axios from 'axios'
import { LOGIN_API } from '../../utils/apis.js'

const Login = () => {

  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const handleLoginUser = async (data) => {
    try {
      const response = await axios.post(LOGIN_API, data)
      if (response.data.status == true) {
        console.log(response.data.user)
        toast.success(response.data.message)
        navigate('/', { replace: true })
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error("Internal server error")
      throw new Error(error)
    }
  }

  return (
    <AuthLayout>
      <div>
        <div className='text-center'>
          <div className='font-bold text-lg'>Login</div>
          <span className='italic text-sm text-gray-500'>Fill the fields to access dashboard</span>
        </div>

        <div className=''>
          <form onSubmit={handleSubmit(handleLoginUser)}>
            
            <div className="my-3">
              <label>Email</label>
              <InputField
              { ...register("email") }
              type="email"
              placeholder="john@email.com"
              />
            </div>
            
            <div className="my-3">
              <label>Password</label>
              <InputField
              { ...register("password") }
              type="password"
              placeholder="Password"
              />
            </div>
            
            <div>
              <SimpleButton text="Login" />
            </div>
          </form>
          <Divider />
          <div>
            <span>
              Don't have an account? {" "}
              <Link to={'/auth/register'} className='hover:underline text-blue-500'>Register</Link>
            </span>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Login
