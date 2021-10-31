import { FaTimes } from "react-icons/fa"
const Task = ({ task, onRem }) => {
    return (
        <div className={`'task' ${task.reminder ? 'reminder' : ''}`} onDoubleClick={(id) => onRem(task.id)}>
            <h3>{task.text}  <FaTimes style={{ color: 'red' }} /></h3>
            <p>{task.day}</p>
        </div>
    )
}
export default Task
