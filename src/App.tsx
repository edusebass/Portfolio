import { useState } from 'react'

function App() {
  
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <p>Count: {count}</p>
        <button className="" onClick={() => setCount(count + 1)}>Increment</button>
      </div>
  
      <p className='bg-red-500'>Hola mijin</p>
    </>
  )
}

export default App
