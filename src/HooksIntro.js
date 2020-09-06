import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor"

function App() {
  const [count, setCount] = useState(0)
  const [answer, setAnswer] = useState("Yes")
  const [color, setColor] = useState("")
  
  function increment() {
      setCount(prevCount => prevCount + 1)
  }
  
  function decrement() {
      setCount(prevCount => prevCount - 1)
  }
  
  function double() {
      setCount(prevCount => prevCount * 2)
  }

  useEffect(() => {
    setColor(randomcolor())
  }, [count])
  
  return (
      <div>
          <h1 style={{color: color}}>{count}</h1>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={double}>Double</button>
      </div>
  )
}

export default App;
