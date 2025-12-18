import React from 'react'
import './home.scss'
import Sidebar from '../../components/Sidebar/Sidebar.jsx'

function Home() {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <div className="upcoming-title">
          <p>Upcoming</p>
          <span>12</span>
        </div>
      </div>
    </div>
  )
}

export default Home
