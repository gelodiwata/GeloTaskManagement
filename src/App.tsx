import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormField from './components/FormField'
import TaskForm from './components/TaskForm'
import Button from './components/Button'
import TaskList from './components/TaskList'
import useTask from './hooks/useTask'

function App() {
  const { setTask, addTask, taskList, deleteTask, editTask } = useTask()
  const { } = useTask();

  function editRow(id: number, value: string) {
    editTask(id, value);
  }



  return (
    <>
      <TaskForm onSubmit={addTask}>
        <FormField label="Task Name" type="text" placeholder='name of your task here...' onChange={setTask} />
        <Button title="Add Task" />
      </TaskForm>

      <TaskList onDelete={deleteTask} onEdit={editRow} list={taskList} />
    </>
  )
}

export default App
