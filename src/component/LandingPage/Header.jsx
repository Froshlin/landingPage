import React from 'react'
import heroImg from "../image/hero_img.png"
import Features from './Features'
import Contact from './Newsletter'


function Header() {

  let buttons = [
    'Submit a Report',
    'Learn More'
  ]

  return (
    <>
      <header>
        <div className="hero-section md-container">
          <div className="hero-main-container">
            <div className="hero-text-container">
              <div className="hero-heading">
                <h1>Combating Financial Crime in Ondo State’s Public Sector</h1>
              </div>
              <div className="hero-paragraph">
                <p>Welcome to the Ondo State Anti-Corruption and Ethical Control Platform. Our mission is to foster financial transparency and uphold integrity within public service across the state’s 18 local government area. Together, we are building a future rooted in accountability.</p>
              </div>
              <div className="hero-btn-container">
                {buttons.map((buttons, buttonIndex) =>{
                  return (
                    <button key={buttonIndex}>{buttons}</button>
                  )
                })}
              </div>
            </div>
            <div className="hero-img-container">
              <img src={heroImg} alt="hero-image" />
            </div>
          </div>
        </div>
      </header>
      <Features/>
      <Contact/>
    </>
  )
}

export default Header
