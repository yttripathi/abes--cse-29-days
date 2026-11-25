import React, { useEffect, useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count:${count}`
    console.log("component rendered");
  },[count])
  return (
    <div>
      <h1>Counter App</h1>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default App