import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import State from './components/State'
import Count from './components/Count'
import Abc from './components/Abc'
import Api from './components/Api'
import Pokemon from './components/Pokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/state" element={<State />} />
        <Route path="/count" element={<Count />} />
        <Route path="/abc" element={<Abc />} />
        <Route path="/api" element={<Api />} />
        <Route path="/pokemon" element={<Pokemon />}/>
      </Routes>
      <br></br>
     
    </>
  )
}

export default App
