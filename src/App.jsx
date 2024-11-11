// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './component/LandingPage/Header'
import NavBar from './component/LandingPage/NavBar'

function App() {

  return (
    <>
      <Router>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Header/>}/>
          <Route path='/about' element={<div>About Page</div>} />
          <Route path='/privacy' element={<div>Privacy Policy Page</div>} />
          <Route path='/service' element={<div>Terms of Service Page</div>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
