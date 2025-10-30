import { useState } from 'react'
import MainPage from './Pages/MainPage'
import Ourservice from './Pages/Ourservice'

function App() {
  const [count, setCount] = useState(0)

  return (
        <div>
        <MainPage/>
        <Ourservice/>
      </div>
      
  )
}

export default App
