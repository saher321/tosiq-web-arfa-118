import React from 'react'
import { InputField, SimpleButton } from '../components/ComponentLib'

const Dashboard = () => {
  return (
    <div>
      <InputField type="text" placeholder="Type name" />
      
      <SimpleButton text="Simple button" />
    </div>
  )
}

export default Dashboard
