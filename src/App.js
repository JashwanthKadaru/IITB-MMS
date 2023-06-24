import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/HomePage/Home'
import About from './pages/About/About'
import Complaints from './pages/ComplaintPage/Complaints'
import NewComplaint from './pages/ComplaintPage/NewComplaint'
import Announcements from './pages/AnnouncmentPage/Announcements'
import Track from './pages/TrackPage/Track'
import SignIn from './pages/SignInPage/SignIn'
import Nav from './components/NavBar/NavBar'
import SignOut from './pages/SignOut/SignOut'
import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'

function App({}) {
  const intial = true
  const [isLogged, setIsLogged] = React.useState(false);

  const toggleLoggedInStatus = () => {
    const b = !isLogged
    setIsLogged(b)
    return b
  }

  useEffect(() => {
    toggleLoggedInStatus()
  }, [])
  
  return (
    <div className='App'>

      <NavBar
        isLogged={isLogged}
        setIsLogged={setIsLogged}
      />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Complaints' element={<Complaints />} />

        <Route path='/Complaints/new-complaint' element={<NewComplaint />} />

        <Route path='/Announcements' element={<Announcements />} />
        <Route path='/Track' element={<Track />} />
        <Route path='/SignIn' element={<SignIn  isLogged={isLogged} setIsLogged={setIsLogged}/>} />
        <Route path='/signout' element={<SignOut isLogged={isLogged} setIsLogged={setIsLogged}/>} />
      </Routes>
    
    </div>
  )
}

export default App
