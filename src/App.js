import React, {useState} from 'react'
import {v4 as uuid} from 'uuid'
import './App.css'
import TagsList from './components/TagsList'
import TaskList from './components/TaskList'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

const App = () => {
  const [tasks, setTasks] = useState([])
  const [taskText, setTaskText] = useState('')
  const [selectedTag, setSelectedTag] = useState(tagsList[0].optionId)

  const handleAddTask = () => {
    if (taskText.trim() === '') return

    const newTask = {
      id: uuid(),
      text: taskText,
      tag: selectedTag,
    }

    setTasks(prevTasks => [...prevTasks, newTask])
    setTaskText('')
    setSelectedTag(tagsList[0].optionId) // Reset tag to the first option
  }

  const handleTagClick = tag => {
    setSelectedTag(tag)
  }

  return (
    <div className="App">
      <h1>Create a Task</h1>
      <form>
        <label>
          Task:
          <input
            type="text"
            value={taskText}
            onChange={e => setTaskText(e.target.value)}
            placeholder="Enter the task here"
          />
        </label>
        <TagsList
          tags={tagsList}
          activeTag={selectedTag}
          onTagClick={handleTagClick}
        />
        <button type="button" onClick={handleAddTask}>
          Add Task
        </button>
      </form>
      <TaskList tasks={tasks} />
    </div>
  )
}

export default App
