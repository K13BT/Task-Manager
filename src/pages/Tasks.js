import React, { useState, useEffect } from 'react'

const Tasks = () => {

  const [tasks, setTasks] = useState([])
  const [showDetails, setShowDetails] = useState({})
  const [showDeleteMessage, setShowDeleteMessage] = useState(false);
  
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'))
    if (storedTasks) {
      setTasks(storedTasks)
    }
  }, [])

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks]
    updatedTasks.splice(index, 1)
    setTasks(updatedTasks)
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
    setShowDeleteMessage(true);
  }
  
  const handleShowDetails = (index) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  useEffect(() => {
    if (showDeleteMessage) {
      setTimeout(() => setShowDeleteMessage(false), 2000);
    }
  }, [showDeleteMessage]);

  return (
    <div className='tasks'>
      {showDeleteMessage && (
      <div className='msg'>Task deleted!</div>
      )}
      {tasks.length === 0 && <h1 className='noTask'>No tasks</h1>}
      
      {tasks.map((task, index) => (
        <div key={index} className='taskInfo'>
          <div className='taskCard'>
            <button onClick={() => handleShowDetails(index)}>
              <i className='fa fa-angle-down'></i>
            </button>
            <h3>{task.title}</h3>
            <button onClick={() => handleDeleteTask(index)}>
              <i className="fa fa-trash delete"></i>
            </button>
          </div>

         
          {showDetails[index] && (
            <div className='taskCard details'>
              <p><b>Date:</b> {task.date} {task.time}</p>
              <p><b>Importance:</b> {task.importance}</p>
              <i className="fa-solid fa-bell" style={{color: task.notify ? '#000' : '#ddd'}}></i>
            </div>           
          )}
        </div>     
      ))}
    </div>
  )
}

export default Tasks