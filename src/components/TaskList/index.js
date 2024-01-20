// const TaskList = ({tasks}) => (
//   <div>
//     <h1>Tasks</h1>
//     {tasks.length === 0 ? (
//       <p>No Tasks Added Yet</p>
//     ) : (
//       <ul>
//         {tasks.map(task => (
//           <li key={task.id} className="task-list-item">
//             <span>{task.text}</span>
//             <span className="tag-text">{task.tag}</span>
//           </li>
//         ))}
//       </ul>
//     )}
//   </div>
// )

// export default TaskList

// TaskList.js

const TaskList = ({tasks}) => (
  <div>
    <h1>Tasks</h1>
    {tasks.length === 0 ? (
      <p>No Tasks Added Yet</p>
    ) : (
      <ul>
        {tasks.map(task => (
          <li key={task.id} className="task-list-item">
            <span>{task.text}</span>
            <span className="tag-text">{task.tag}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
)

export default TaskList
