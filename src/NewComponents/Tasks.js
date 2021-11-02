import Task from "./Task"
const Tasks = ({ tasks, onRem, onDelete }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onRem={onRem} onDelete={onDelete} />
            ))}
        </>
    )
}

export default Tasks
