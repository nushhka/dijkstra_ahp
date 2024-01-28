import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx"

function App() {

  return (
    <>
     <div className='bg-gray-800'>
      <Navbar/>
      <Home/>
      
     </div>
     
      
    </>
  )
}

export default App
