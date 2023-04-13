import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav className='navbar'>
        <Link to='/' className='homeLink'>
          <i className="fa-solid fa-note-sticky"></i>
        </Link>
        <div className='tasksLink'>
          <Link className='navLink' to='/tasks'><i className="fa fa-file" aria-hidden="true"></i></Link>
          <Link className='navLink' to='/task'><i className="fa fa-plus" aria-hidden="true"></i></Link>
        </div>
        <div className='nav'>
          <Link to='/login' className='link'>Login</Link>
          <Link to='/signup' className='link'>Sign up</Link>
        </div>
        
      </nav>
    </div>
  )
}

export default Nav