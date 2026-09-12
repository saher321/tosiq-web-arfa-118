import React from 'react'
import AuthLayout from '../../Layouts/AuthLayout'
import { useForm } from 'react-hook-form'
import { Divider, InputField, SimpleButton } from '../../components/ComponentLib'
import { Link, useNavigate } from 'react-router'
import { FORGOT_API } from '../../utils/apis.js'
import toast from 'react-hot-toast'
import axios from 'axios'
import useAuth from '../../store/useAuth.jsx'

const ForgotPassword = () => {
  const {register, handleSubmit} = useForm()
  const navigate = useNavigate()

  const handleForgotPassword = async (data) => {
    try {
      console.log(data.email)
      const response = await axios.post(FORGOT_API, data)
      if (response.data.status == true) {
        toast.success(response.data.message)
        localStorage.setItem('forgotEmail', data.email)
        // navigate('/auth/reset-password', { replace: true })
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
          <div className='font-bold text-lg'>Forgot password</div>
          <span className='italic text-sm text-gray-500'>Lost your password? Don't worry!</span>
        </div>

        <div>
          <form onSubmit={handleSubmit(handleForgotPassword)}>
            
            <div className="my-3">
              <label>Email</label>
              <InputField
              { ...register("email") }
              type="email"
              placeholder="john@email.com"
              />
            </div>
            
            <div>
              <SimpleButton text="Send OTP" />
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

export default ForgotPassword
