import { useState } from "react"
import type { TaskItem } from "../interfaces/TaskManagement"
import data from '../../public/seed.json'

export default function useTask() {
    const [task, setTask] = useState<string>('')
    const initialData = () => {
        return data.todoList as TaskItem[]
    }

    const [taskList, setTaskList] = useState<TaskItem[]>(initialData())


    function addTask() {
        setTaskList((prev) => [...prev, {
            id: prev.length,
            title: task,
            completed: false
        }])
    }

    function editTask(id: number, value: string) {
        setTaskList((prev) => prev.map((item: TaskItem) => item.id === id ? { ...item, title: value } : item))
    }

    function deleteTask(id: number) {
        setTaskList((prev) => prev.filter((item: TaskItem) => item.id !== id))
    }

    return { setTask, addTask, taskList, editTask, deleteTask }
}
