import Task from "./Task"
const Tasks = ({ tasks, onRem }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onRem={onRem} />
            ))}
        </>
    )
}

export default Tasks
