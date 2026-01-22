import type { TaskFormProps } from "../interfaces/TaskManagement";

/**
 * Task Form Component
 * Serves as the form wrapper for all form inputs
 * @param props see TaskFormProps
 */
export default function TaskForm(props: TaskFormProps) {

    function submitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        props.onSubmit();
    }
    return (
        <form className="task-form" onSubmit={(e: React.FormEvent<HTMLFormElement>) => submitForm(e)}>
            {props.children}
        </form>
    )
}
