import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = async e => {
    e.preventDefault()

    setEmail('')
    setPassword('')
  }

  return (
    <div className='card'>
        <h3 className='infoHead'>Login</h3>
        <form className='infoInputs' onSubmit={onSubmit}>
            <input value={email} placeholder='Email' onChange={e => setEmail(e.target.value)} type='text' required/>
            <input value={password} placeholder='Password' onChange={e => setPassword(e.target.value)} type='password' required/>
            <input value='Login' type='submit'/>
        </form>
        <div className='logSign'>
          <p>Don't have an account?</p>
          <Link to='/signup'>Sign up</Link>
        </div>
    </div>
  )
}

export default Login