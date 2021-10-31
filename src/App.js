import Header from './NewComponents/Header'
import Tasks from './NewComponents/Tasks'
import { useState } from 'react'
import AddTask from './NewComponents/AddTask';
function App() {
    const [tasks, setState] = useState([{
        id: 1,
        text: 'Sera Felega',
        day: 'October 23, 2PM',
        reminder: false,

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
    const Reminder = (id) => {
        // console.log('rem', id)
        setState(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
    }
    return (
        <div className='container'>
            <Header />
            <AddTask />
            <Tasks tasks={tasks} onRem={Reminder} />

        </div>
    )
}
export default App