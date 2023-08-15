import { useState } from 'react'
import Header from './components/header';

function App() {
  
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div>
        <p>Count: {count}</p>
        <button className="" onClick={() => setCount(count + 1)}>Increment</button>
      </div>
  
      <p className="text-slate-500 hover:text-blue-600">Hola mijin</p>

    </>
  )
}

export default App
