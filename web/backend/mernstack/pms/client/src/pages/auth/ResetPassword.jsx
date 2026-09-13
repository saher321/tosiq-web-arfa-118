import React from 'react'
import AuthLayout from '../../Layouts/AuthLayout'
import { Divider, InputField, SimpleButton } from '../../components/ComponentLib'
import { Link, useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import axios from 'axios'
import { RESET_API } from '../../utils/apis.js'

const ResetPassword = () => {

  const { register, handleSubmit } = useForm()

  const navigate = useNavigate()

  const handleResetPassword = async (data) => {
    try {
      const newData = {
        userEmail: localStorage.getItem("forgotEmail"),
        otp: data.otp,
        newPassword: data.newPassword,
      }
      const response = await axios.post(RESET_API, newData)
      if (response.data.status == true) {
        toast.success(response.data.message)
        localStorage.removeItem("forgotEmail")
        navigate('/auth/login', { replace: true })
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
          <div className='font-bold text-lg'>Reset Password</div>
          <span className='italic text-sm text-gray-500'>Confirm OTP to reset your password</span>
        </div>

        <div className=''>
          <form onSubmit={handleSubmit(handleResetPassword)}>
            
            <div className="my-3">
              <label>OTP</label>
              <InputField
              { ...register("otp") }
              type="text"
              placeholder="123456"
              />
            </div>
            
            <div className="my-3">
              <label>New Password</label>
              <InputField
              { ...register("newPassword") }
              type="password"
              placeholder="Password"
              />
            </div>
            
            <div className='flex items-center justify-between'>
              <SimpleButton text="Reset my password" />
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

export default ResetPassword
