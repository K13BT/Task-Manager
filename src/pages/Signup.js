import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = async e => {
    e.preventDefault()

    setName('')
    setEmail('')
    setPassword('')
  }

  return (
    <div className='card'>
        <h3 className='infoHead'>Sign up</h3>
        <form className='infoInputs' onSubmit={onSubmit}>
          <input placeholder='Name' value={name} type='text' onChange={e => {setName(e.target.value)}} required/>
          <input placeholder='Email' value={email} type='email' onChange={e => {setEmail(e.target.value)}} required/>
          <input placeholder='Password' value={password} type='password' onChange={e => {setPassword(e.target.value)}} required/>
          <input type='submit' value='Continue'/>
        </form>
        <div className='logSign'>
          <p>Already have an account?</p>
          <Link to='/login'>Log in</Link>
        </div> 
    </div>
  )
}

export default Signup