import { useState } from 'react'
import Component from './Component'
import MainPage from './Pages/MainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
        <div>
        <Component/>
        <MainPage/>
      </div>
      
  )
}

export default App
