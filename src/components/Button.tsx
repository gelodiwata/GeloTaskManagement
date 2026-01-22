import type { ButtonProps } from "../interfaces/TaskManagement";

/**
 * Button Component
 * @param props see ButtonProps
 */
export default function Button(props: ButtonProps) {
    function executeEvent(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        if (props.onClick) {
            e.preventDefault();
            props.onClick();
        }
    }
    return (
        <button type="submit" onClick={(e) => executeEvent(e)}>{props.title}</button>
    )
}
