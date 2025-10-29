import { useState } from 'react'
import MainPage from './Pages/MainPage'


function App() {
  const [count, setCount] = useState(0)

  return (
        <div>
        <MainPage/>
      </div>
      
  )
}

export default App
