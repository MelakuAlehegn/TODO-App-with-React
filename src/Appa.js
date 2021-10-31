import { useState } from "react"
import Header from './Components/Header'
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';

function Appa() {
    const [tasks, setState] = useState([{
        id: 1,
        txt: 'Sera Flega',
        day: 'October 22, 4:30AM',
        reminder: false,
    },
    {
        id: 2,
        txt: 'Hiking',
        day: 'October 23, 4AM',
        reminder: true,
    },
    {
        id: 3,
        txt: 'Alx Project',
        day: 'October 24, 6PM',
        reminder: true,
    },
    {
        id: 4,
        txt: 'Zoom class',
        day: 'October 24, 2PM',
        reminder: false,
    }
    ])
    const deleteTask = (id) => {
        // console.log('de', id)
        setState(tasks.filter((task) => task.id !== id))
    }
    const Reminder = (id) => {
        // console.log("rem", id)
        setState(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
    }
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = { id, ...task }
        setState([newTask, ...tasks])
    }
    return (
        <div className="container">
            <Header />
            <AddTask onAdd={addTask} />
            {tasks.length ? <Tasks tasks={tasks} onDelete={deleteTask} onRem={Reminder} /> : 'Task empty'}
        </div>
    )
}

export default Appa