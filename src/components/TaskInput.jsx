import React, { useState } from 'react'

const TaskInput = ({addTask}) => {
    const [task, setTask] = useState('');

//    console.log(task);
    function handleInputValue(event) {
        setTask(event.target.value);
    }

    function handleAddTask(event) {
        event.preventDefault();
        if (task.trim() === '') return;
        addTask(task);
        setTask('');
    }

  return (
    <form className='inputField' value={task} onSubmit={handleAddTask}>
        <input type='text' placeholder='Add Item...' 
        onChange={handleInputValue} />
        <button>+</button>
    </form>
  )
}

export default TaskInput; 