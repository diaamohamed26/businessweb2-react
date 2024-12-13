import React from 'react'
import './home.css'
import about from '../../assets/about.jpg'

function home() {
  return (
    <div className='home' id='home'>
      <div className='par-home'>
        <h1>We Collaboration Easy & Fast</h1>
        <p>This is just a simple text made for this unique and awesome template,
        <br/> you can replace it with any text.</p>
        <button className='started-btn'>
          get started
        </button>
      </div>
      <div className='about'>
        <img src={about} className='about-img'/>
        <div className='about-par'>
          <h3>Who Are We ?</h3>
          <h1>We're a global stakeholder
          relations and partnership
          building consultancy.</h1>
          <p>Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Techwind network, and much more with just a few taps. commodo consequat. Duis aute irure.</p>
          <button className='read-btn'>
            Read More
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default home

