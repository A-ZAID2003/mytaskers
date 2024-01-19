const TaskList = ({tasks}) => (
  <div>
    <h1>Tasks</h1>
    {tasks.length === 0 ? (
      <p>No Tasks Added Yet</p>
    ) : (
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <div className="task-item">
              <span>{task.text}</span>
              <span className="tag">{task.tag}</span>
            </div>
          </li>
        ))}
      </ul>
    )}
  </div>
)

export default TaskList
