import type { TaskItem, TaskListProps } from '../interfaces/TaskManagement'
import TaskRow from './TaskRow'

export default function TaskList(props: TaskListProps) {
    return (
        <>

            <ul className='task-list-container'>
                {
                    props.list.length > 0 ? props.list.map((property: TaskItem, index: number) => (<TaskRow onEdit={props.onEdit} onDelete={props.onDelete} key={index} taskName={property.title} id={property.id} />)) :
                        <li>Wow, such empty. Add a task above.</li>
                }
            </ul>
            <span>note: double click on the task title below to edit it</span>
        </>
    )
}
