// src/components/TaskList.js
import React from 'react'

const TaskList = ({tasks}) => (
  <div>
    <h2>Task List</h2>
    {tasks.length === 0 ? (
      <p>No tasks available.</p>
    ) : (
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.text} - {task.tag}
          </li>
        ))}
      </ul>
    )}
  </div>
)

export default TaskList
