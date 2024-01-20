const TaskList = ({tasks, activeTag}) => {
  const filteredTasks = activeTag
    ? tasks.filter(task => task.tag === activeTag)
    : tasks

  return (
    <div>
      <h1>Tasks</h1>
      {filteredTasks.length === 0 ? (
        <p>No Tasks Added Yet</p>
      ) : (
        <ul>
          {filteredTasks.map(task => (
            <li key={task.id}>
              <p>
                {task.text} - {task.tag}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TaskList
