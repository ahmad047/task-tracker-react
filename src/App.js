import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react'


const App = () => {

    const [tasks, setTasks] = useState([

        {
            id: 1,
            text: 'Doctors appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true
        },
        {
            id: 2,
            text: 'Meeting at school',
            day: 'Feb 6th at 2:30pm',
            reminder: true
        },
        {
            id: 3,
            text: 'shopping',
            day: 'Feb 7th at 2:30pm',
            reminder: true
        }
    ])

    // Delete task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }
    return (
        <div className='container'>
            <Header />
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No tasks to show'}
        </div>
    );
}

export default App;
