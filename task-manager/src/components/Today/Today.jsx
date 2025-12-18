import React from 'react'
import './today.scss'
import {Add, Category, NavigateNext,TodayOutlined} from "@mui/icons-material";

const tasks=[
    {
        id:"task1",
        title:"Research about React.js",
        date:"2024-06-20",
        category:"Personal"
    },
    {
        id:"task2",
        title:"Finish your backend project",
        date:"2024-06-20",
        category:"Work"
    },
    {
        id:"task3",
        title:"Finish your backend project",
        date:"2024-06-20",
        category:"Others"
    },
    {
        id:"task4",
        title:"Finish your backend project",
        date:"2024-06-20",
        category:"Personal"
    }

]

function Today() {
  return (
    <div className='today'>
        <p className="title">Today</p>
        <ul>
            <li style={{borderLeft:"1px solid #e6e6e6"}}>   
                <Add/>
                <span style={{marginLeft:"10px"}}>Add Task</span>
            </li>
            {tasks.map((task)=>(
                <li key={task.id}>
                    <input type="checkbox" id={task.id}/>
                    <label>{task.title}
                        <div className="details">
                            <div className="left">
                                <TodayOutlined className='icon'/>
                                <p>{task.date}</p>
                            </div>
                            <div className="center">
                                <span>2</span>
                                <p>Subtasks</p>
                            </div>
                            <div className="right">
                                <span></span>
                                <p>{task.category}</p>
                            </div>
                        </div>
                    </label>
                    <NavigateNext/>
                </li>
            ))}
           
        </ul>
      
    </div>
  )
}

export default Today
