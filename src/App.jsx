import { useState } from 'react'
import MainPage from './Pages/MainPage'
import Ourservice from './Pages/Ourservice'
import Customersat from './Pages/Customersat'
function App() {
  const [count, setCount] = useState(0)

  return (
        <div>
        <MainPage/>
        <Ourservice/>
        <Customersat/>
      </div>
      
  )
}

export default App
