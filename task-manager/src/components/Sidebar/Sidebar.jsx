import React from 'react'
import './sidebar.scss'
import MenuIcon from '@mui/icons-material/Menu';
import { SearchOutlined, NavigateNext,Checklist, CalendarMonthOutlined, StickyNote2,Logout } from '@mui/icons-material';


function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="top">
            <div className="menu">
                <span className="menu-title">
                    Menu
                </span>
                <MenuIcon />
            </div>
            <div className="search">
                <input type="text" placeholder="Search" />
                <SearchOutlined/>
            </div>
            
        </div>
        <div className="center">
            <ul>
                <p className="title">TASKS</p>
                <li>
                    <NavigateNext className='icon'/>
                    <span>Upcoming</span>
                    <div className="counter">5</div>
                </li>
                <li>
                    <Checklist className='icon'/>
                    <span>Today</span>
                    <div className="counter">5</div>
                </li>
                <li>
                    <CalendarMonthOutlined className='icon'/>
                    <span>Calender</span>
                    <div className="counter">5</div>
                </li>
                <li>
                    <StickyNote2 className='icon'/>
                    <span>Sticky Wall</span>
                </li>
            
                <p className='title'>CATEGORY</p>
            
                <li>
                    <div className="color" style={{background:"#e74c3c"}}></div>
                    <span>Personal</span>
                    <div className="counter">5</div>
                </li>
                <li>
                    <div className="color" style={{background:"#3498db"}}></div>
                    <span>Work</span>
                    <div className="counter">5</div>
                </li>
                <li>
                    <div className="color" style={{background:"#f1c40f"}}></div>
                    <span>Others</span>
                    <div className="counter">5</div>
                </li>
            </ul>
            <p className='title'>TAGS</p>
            <div className="tags">
                <div className="tag" style={{backgroundColor:"blue"}}>
                    <span style={{color:"white"}}>Urgent</span>
                </div>
                <div className="tag" style={{backgroundColor:"red"}}>
                    <span style={{color:"white"}}>New</span>
                </div>
                <div className="tag add-tag">
                    <input type="text" placeholder="New Add Tag" />
                </div>
            </div>
        </div>
            
        <div className="bottom">
            <ul>
                <li>
                    <Logout className='icon'/>
                    <span>Sign Out</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar
