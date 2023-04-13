import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <i className='fa-solid fa-note-sticky homeIcon'></i>
      <h1>Task Manager</h1>

      <div className='homeLinks'> 
        <Link className='taskLink' to='/task'><i className="fa-solid fa-plus"></i> Create New</Link>
        <Link className='taskLink' to='/tasks'>Tasks</Link>  
      </div>
    </div>
  )
}

export default Home