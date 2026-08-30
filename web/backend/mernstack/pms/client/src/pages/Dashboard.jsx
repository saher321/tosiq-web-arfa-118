import React from 'react'
import { InputField, SelectOption, SimpleButton } from '../components/ComponentLib'

const Dashboard = () => {

  const mydata = [
    {id: 1, text: "Text here"},
    {id: 11, text: "Text here"},
    {id: 2, text: "Text here"},
  ]

  return (
    <div>
      <InputField type="password"/>
      
      <SimpleButton text="Simple button" />
      <br />
      <SelectOption data={mydata} />
    </div>
  )
}

export default Dashboard
