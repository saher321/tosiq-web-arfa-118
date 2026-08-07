import React, { useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(1)
  
  const count = () => {
    setCounter(counter + 1)
  }

  useEffect(() => {
    console.log("Runs on every call")
  })

  useEffect(() => {
    console.log("Runs only when page loading")
  }, [])

  useEffect(() => {
    if (counter == 5) {
      console.log("Counter value is limited")
    }
  }, [counter])

  return (
  <div>
    <h1>useEffect()</h1>
    <button onClick={count}>
      Click me [{counter}]
    </button>
  </div>
  )
}

export default App;
