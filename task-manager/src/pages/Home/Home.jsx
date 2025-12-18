import React from 'react'
import './home.scss'
import Sidebar from '../../components/Sidebar/Sidebar.jsx'
import Today from '../../components/Today/Today.jsx'

function Home() {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <div className="upcoming-title">
          <p>Upcoming</p>
          <span>12</span>
        </div>

        <div className="home-top">
          <Today />
        </div>
        <div className="home-bottom">
          <div className="home-left"></div>
          <div className="home-right"></div>
        </div>
      </div>
    </div>
  )
}

export default Home
