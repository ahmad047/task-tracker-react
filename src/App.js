import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState, useEffect} from 'react'
import AddTask from "./components/AddTask";


const App = () => {
    const [showAddTask, setShowAddTask] = useState(false)

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }

        getTasks()
    }, [])

    const fetchTasks = async() => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()

        return data
    }


    const deleteTask = async (id) => {

        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE'
        })


        setTasks(tasks.filter((task) => task.id !== id))
    }

    const toggleReminder =(id) => {
        setTasks(tasks.map((task) =>
            task.id === id ?
                { ...task, reminder: !task.reminder } :
                task
        ))
    }

    const addTask = async (task) => {
        // const id = Math.floor(Math.random() * 10000) + 1
        // const newTask = { id, ...task }
        // setTasks([...tasks, newTask])

        const res = await fetch('http://localhost:5000',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })

        const data = await res.json()

        setTasks([...tasks, data])
    }


    return (
        <div className='container'>
            <Header
                onAdd={() => setShowAddTask(!showAddTask)}
                showAdd={showAddTask}
            />
            { showAddTask &&
                <AddTask
                onAdd={addTask}
            />}
            {tasks.length > 0 ?
                <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                />
                : 'No tasks to show'}
        </div>
    );
}

export default App;
