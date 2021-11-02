import Header from './NewComponents/Header'
import Tasks from './NewComponents/Tasks'
import { useState } from 'react'
import AddTask from './NewComponents/AddTask';
function App() {
    const [tasks, setState] = useState([{
        id: 1,
        text: 'Sera Felega',
        day: 'October 23, 2PM',
        reminder: true,
    },
    {
        id: 2,
        text: 'Workout',
        day: 'October 24, 4PM',
        reminder: false,

    },
    {
        id: 3,
        text: 'Zoom with Peers',
        day: 'October 25, 2AM',
        reminder: false,

    }
    ]);
    const Delete = (id) => {
        // console.log('delete', id)
        setState(tasks.filter((task) => task.id !== id))
    }
    const Reminder = (id) => {
        // console.log(id)
        setState(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
    }
    const add = (task) => {
        const id = Math.floor(Math.random() * 1000) + 1
        const taskAdded = { id, ...task }
        setState([...tasks, taskAdded])

    }

    return (
        <div className='container'>
            <Header />
            <AddTask onAdd={add} />
            {tasks.length > 0 ? <Tasks tasks={tasks} onRem={Reminder} onDelete={Delete} /> : 'No Tasks'}
        </div>
    )
}
export default App