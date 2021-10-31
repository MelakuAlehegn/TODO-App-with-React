import { FaTimes } from 'react-icons/fa'
const Task = ({ task, onDelete, onRem }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={(id) => onRem(task.id)}>
            <h3>{task.txt} <FaTimes style={{ color: 'red' }} onClick={() => onDelete(task.id)} /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
