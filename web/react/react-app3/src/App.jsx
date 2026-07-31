import React from 'react'

const App = () => {
  return (
    <div className='m-5'>
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

export default App
