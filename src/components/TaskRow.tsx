import { useState } from 'react'
import useTask from '../hooks/useTask'
import Button from './Button'
import TextInput from './TextInput'
import type { TaskRowProps } from '../interfaces/TaskManagement';

export default function TaskRow(props: TaskRowProps) {
    const [isEditable, setIsEditable] = useState<boolean>(false);
    const [newValue, setNewValue] = useState<string>('');

    return (
        <li><div className="task-row">{
            !isEditable ?
                <span onDoubleClick={() => setIsEditable(true)}>{props.taskName}</span> :
                <div className='edit-task-row'>
                    <TextInput type="text" placeholder={props.taskName} onChange={setNewValue} />
                    <Button onClick={() => { props.onEdit(props.id, newValue); setIsEditable(false) }} title='Edit' />
                </div>
        }
            <Button onClick={() => props.onDelete(props.id)} title='Delete' />
        </div>
        </li>
    )
}
