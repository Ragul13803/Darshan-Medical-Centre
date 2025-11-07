import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout> <Home /> </Layout> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
