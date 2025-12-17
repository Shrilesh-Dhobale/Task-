import React from 'react'
import './home.scss'
import Sidebar from '../../components/Sidebar/Sidebar.jsx'

function Home() {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        Home
      </div>
    </div>
  )
}

export default Home
