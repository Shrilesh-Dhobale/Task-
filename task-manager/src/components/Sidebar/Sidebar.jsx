import React from 'react'

function Sidebar() {
  return (
    <div>
        <div className="top">
            <div className="menu">
                <span className="menu-title">
                    Menu
                </span>
            </div>
            <div className="search">
                <input type="text" placeholder="Search" />
            </div>
        </div>
        <div className="center"></div>
            
        <div className="bottom"></div>
    </div>
  )
}

export default Sidebar
