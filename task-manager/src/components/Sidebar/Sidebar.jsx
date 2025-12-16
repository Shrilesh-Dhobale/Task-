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
        <div className="center">
            <ul>
                <p className="title">TASK</p>
                <li>
                    <span>Upcoming</span>
                </li>
                <li>
                    <span>Today</span>
                </li>
                <li>
                    <span>Calender</span>
                </li>
                <li>
                    <span>Sticky Wall</span>
                </li>
            </ul>
            <p className='title'>CATEGORY</p>
            <ul>
                <li>
                    <div className="color"></div>
                    <span>Personal</span>
                </li>
                <li>
                    <div className="color"></div>
                    <span>Work</span>
                </li>
                <li>
                    <div className="color"></div>
                    <span>Others</span>
                </li>
            </ul>
            <p className='title'>TAGS</p>
            <div className="tags">
                <div className="tag add-tag">
                    <input type="text" placeholder="New Add Tag" />
                </div>
            </div>
        </div>
            
        <div className="bottom">
            <ul>
                <li>
                    <span>Sign Out</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar
