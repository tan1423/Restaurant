import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Loginpop from './Components/Login-pop/Loginpop'

function App() {
  
  const [showlogin, setShowlogin] = useState(false)

  return (
    <>
    {showlogin ? <Loginpop setShowlogin={setShowlogin}/> : <></>}
      <Navbar setShowlogin={setShowlogin}/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
