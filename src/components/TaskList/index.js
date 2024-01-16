import React from 'react'

const TaskList = ({tasks}) => (
  <div>
    <h1>Tasks</h1>
    {tasks.length === 0 ? (
      <p>No Tasks Added Yet</p>
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
