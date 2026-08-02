import React, { useRef, useState } from 'react'
import PageTitle from './components/PageTitle'
import { LuUserCog } from 'react-icons/lu'

const App = () => {
  const [user, setUser] = useState("Ali")
  const [counter, setCounter] = useState(1)
  
  const username  = useRef(null)
  const userage   = useRef(null)
  const useremail = useRef(null)
  // const [variablename, setFunction] = useState(123)
  // const [variablename, setFunction] = useState([])
  // const [variablename, setFunction] = useState({})
  // const [variablename, setFunction] = useState(true)
  // const [variablename, setFunction] = useState("")
  // const user = {name: "Ali", age: 32}

  const changeText = () => {
    setUser("Usman")
  }

  const addStep = () => {
    // if (counter == 5) {
    //   console.log("Out of stock")
    //   return;
    // }
    setCounter(counter + 1)
  }

  const removeStep = () => {
    
    setCounter(counter - 1)
  }

  const getValueFromInput = () => {
    let name = username.current.value
    let email= useremail.current.value
    console.log(name, email)
  }

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
        <h2>Counter</h2>
        <h1>{counter}</h1>
        <button onClick={removeStep}>Remove Step</button> | {" "} 
        <button onClick={addStep}>Add Step</button>
      </PageTitle>

      <PageTitle>
        <h2>Testing</h2>
        <button onClick={changeText}>Change name</button>
        <div className='icon-text'>
          <LuUserCog /> <span>{user}</span>
        </div>
      </PageTitle>

      <PageTitle>
        <h2>useRef()</h2>
        <input type="text" ref={username} placeholder='Enter name' /> <br />
        <input type="text" ref={useremail} placeholder='Enter email'/>
        <button onClick={getValueFromInput}>Print Value</button>
        <h2></h2>
      </PageTitle>

      

    </div>
  )
}

export default App