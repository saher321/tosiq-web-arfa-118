import React from 'react'
import PageTitle from './components/PageTitle'

const App = () => {
  return (
    <div>
      <h1>Welcome to react js</h1>
      <PageTitle>
        {/* child content will goes here */}
        <h2>Our Home</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eligendi quod illo, error praesentium eius. Et, repellat nihil assumenda, mollitia ratione id corporis ab deleniti expedita architecto veniam minima repudiandae.
        </p>
      </PageTitle>


      <PageTitle>
        <h2>Our Services</h2>
      </PageTitle>

    </div>
  )
}

export default App