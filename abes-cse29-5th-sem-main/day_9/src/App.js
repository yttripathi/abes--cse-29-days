import React, { useState } from 'react'
const App = () => {
  const [count,setCount] = useState(0);
  // const increment = () => {
  //   setCount(count+1);
  //   console.log(count);
  // }
  // const decrement = () => {
  //   setCount(count-1);
  //   console.log(count);
  // }
  return (
    <div style={{textAlign:"center"}}>
      <h1 style={{backgroundColor:"black",color:"white"}}>Counter App</h1>
      <br></br>
      <button onClick={()=>setCount(count-1)}>-</button>
      <span>{count}</span>
      <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}
export default App