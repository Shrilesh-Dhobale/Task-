import React from 'react'
import './today.scss'
import {Add} from "@mui/icons-material";

function Today() {
  return (
    <div className='today'>
        <p className="title">Today</p>
        <ul>
            <li style={{borderLeft:"1px solid #e6e6e6"}}>   
                <Add/>
            </li>
        </ul>
      
    </div>
  )
}

export default Today
