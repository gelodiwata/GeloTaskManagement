export interface FormFieldProps {
    label: string;
    type: string;
    placeholder: string;
    onChange: (value: string) => void
}

export interface LabelProps {
    label?: string;
    for: string
}

export interface ButtonProps {
    title: string;
    onClick?: () => void
}

export interface TextInputProps {
    id?: string;
    type: string;
    placeholder?: string;
    onChange: (value: string) => void
}

export interface TaskFormProps {
    children: React.ReactNode;
    onSubmit: Function
}

export interface TaskItem {
    id: number;
    title: string;
    completed: boolean;
}

export interface TaskRowProps {
    taskName: string;
    id: number;
    onEdit: (id: number, value: string) => void;
    onDelete: (id: number) => void
}

export interface TaskListProps {
    list: TaskItem[];
    onEdit: (id: number, value: string) => void;
    onDelete: (id: number) => void
}