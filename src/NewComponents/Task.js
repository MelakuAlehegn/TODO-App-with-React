import { FaTimes } from "react-icons/fa"
const Task = ({ task, onRem, onDelete }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onRem(task.id)}>
            <h3>{task.text}  <FaTimes style={{ color: 'red', cursor: 'ponter' }} onClick={() => onDelete(task.id)} /></h3>
            <p>{task.day}</p>

        </div>
    )
}
export default Task
