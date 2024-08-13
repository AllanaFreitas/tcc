import { useState } from 'react'
import './App.css'
import Header from './pages/Header.jsx'
import Home from './pages/Home.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Home/>
      
    </>
  )
}

export default App
