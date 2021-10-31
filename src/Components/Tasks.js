import Task from "./Task"
const Tasks = ({ tasks, onDelete, onRem }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onRem={onRem} />
            ))}
        </>
    )
}
export default Tasks