import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(prevCount => prevCount + 1);
  }

  return (
    <div>
      <h1>The count is {counter}</h1>
      <button onClick={increment}>Add 1</button>
    </div>
  );
}

export default App;
