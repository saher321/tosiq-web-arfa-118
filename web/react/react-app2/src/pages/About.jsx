import React from 'react'
import GetStartedBtn from '../components/GetStartedBtn'
import ActionButton from '../components/ActionButton'

const About = () => {

  const showData = () => {
    console.log("Click me button is pressed")
  }

  const printUser = () => {
    const user = { name: "Ali", age: 34 }
    console.log(user)
  }

  const getList = () => {
    const colors = ["Purple", "Black", "Brown", "Red"]
    console.log(colors)
  }

  return (
    <div className='m-5 page-title rounded shadow p-4'>
        
        <GetStartedBtn title="Get Started" 
        url="https://youtube.com/"
        target="_blank"
        />
        
        <div style={{margin:"8px 0px"}}>About</div>

        <GetStartedBtn title="Explore More" 
        url="https://google.com/"
        />

        <hr className='my-5 text-gray-300'/>

        <ActionButton 
        text="Click me"
        classes="cursor-pointer px-3 py-1 rounded bg-gray-800 text-purple-100"
        action={showData}
        />

        <ActionButton 
        text="Print User"
        classes="cursor-pointer px-3 py-1 rounded bg-purple-800 text-purple-100"
        action={printUser}
        />

        <ActionButton 
        text="Get List"
        classes="cursor-pointer px-3 py-1 rounded bg-amber-800 text-purple-100"
        action={getList}
        />

        <hr className='my-5 text-gray-300'/>

        <span className='p-5 border-2 border-blue-400 inline-block bg-blue-300 rounded text-blue-600'>
        Welcome to our Reactjs lecture
      </span>
      <h1 className="text-3xl font-bold italic text-shadow-lg underline">
        Hello world!
      </h1>
      <button
      className='mt-5 py-2 px-6 shadow hover:bg-purple-800 cursor-pointer bg-purple-600 text-gray-100 rounded'
      >Button</button>
      {/* 
      pt-1, pb-1, pl-3, pr-5
      button    x
      input     x
      heading   x
      */}

    </div>
  )
}

export default About