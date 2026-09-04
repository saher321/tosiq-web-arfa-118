import React from 'react'
import AuthLayout from '../../Layouts/AuthLayout'
import { Divider, InputField, SelectInput, SimpleButton } from '../../components/ComponentLib'
import { Link } from 'react-router'
import { roles } from '../../utils/common.js'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import axios from 'axios'
import { REGISTER_API } from '../../utils/apis.js'

const Register = () => {

  const { register, handleSubmit } = useForm()

  const handleRegisterUser = async (data) => {
    try {
      const response = await axios.post(REGISTER_API, data)
      if (response.data.status == true) {
        toast.success(response.data.message)
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
          <div className='font-bold text-lg'>Register</div>
          <span className='italic text-sm text-gray-500'>create an account to access actions</span>
        </div>

        <div className=''>
          <form onSubmit={handleSubmit(handleRegisterUser)}>
            <div className="my-3">
              <label>Full name</label>
              <InputField
              { ...register("fullName") }
              type="text"
              placeholder="John Doe"
              />
            </div>
            
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

            <div className="my-3">
              <label>Role</label>
              <SelectInput
              { ...register("role") }
              data={roles}
              />
            </div>
            
            <div>
              <SimpleButton text="Create an Account" />
            </div>
          </form>
          <Divider />
          <div>
            <span>
              Already have an account? {" "}
              <Link to={'/auth/login'} className='hover:underline text-blue-500'>Login</Link>
            </span>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Register
