import React, { useState, useEffect } from 'react'

const Task = () => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [importance, setImportance] = useState('')
  const [notify, setNotify] = useState(false)
  const [tasks, setTasks] = useState([])
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks')
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks))
    }
  }, [])

  const task = {title, date, time, importance, notify}

  const onSubmit = e => {
    e.preventDefault()

    setTasks([...tasks, task])

    const storedTasks = JSON.stringify([...tasks, task])

    if (storedTasks) {
      localStorage.setItem('tasks', storedTasks)
    }

    setTitle('')
    setDate('')
    setTime('')
    setImportance('')
    setNotify(false)
    document.querySelectorAll('input[type=radio]').forEach(radio => {
      radio.checked = false
    })

    setShowMessage(true)
    setTimeout(() => setShowMessage(false), 2000)
  }

  return (
    <div className='task'>
      <h1 className='header'>New Task</h1>
      {showMessage && <p className='msg'>Task added!</p>}
      <form onSubmit={onSubmit}>
        <input type='text' placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} required/>
        <input type='date' value={date} onChange={e => setDate(e.target.value)} required/>
        <input type='time' value={time} onChange={e => setTime(e.target.value)} required/>

        <div className='importance' name='importance' required>
          <label><input type='radio' onChange={() => setImportance('important')} name='importance' checked={importance === 'important'}/> Important</label>   
          <label><input type='radio' onChange={() => setImportance('very important')} name='importance' checked={importance === 'very important'}/> Very important</label>   
          <label><input type='radio' onChange={() => setImportance('not so important')} name='importance' checked={importance === 'not so important'}/> Not so important</label>
        </div>

        <label className='checkbox'><input type='checkbox' onChange={() => setNotify(!notify)} checked={notify}/>Notify me</label>

        <input type='submit' value='Save'/>
      </form>
    </div>
  )
}

export default Task