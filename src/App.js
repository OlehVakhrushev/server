import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Column from "./components/Column";

function App() {


    const [statuses, setStatuses] = useState([])
    const [tasks, setTasks] = useState([]);
    console.log(statuses)

    const getStatuses = () => {
        axios.get('https://expressjs-server.vercel.app/statuses')
            .then((res) => {
                console.log(statuses)
                setStatuses(res.data)
            })
            .catch(err => {
                alert('Error is here')
            })
    }

    useEffect(() => {
        getStatuses()
    }, [])

    const updateTask = (id) => {
        const newStatus = {status: 'todo'}
        axios.patch(`https://expressjs-server.vercel.app/tasks${id}`, newStatus)
            .then((res) => {
                console.log(res)
            }).catch((err) => {
            alert('ШЕФ! Пропало все, клиент уездает, гипс снимают...')
        })

    }

    useEffect(()=> {
        updateTask('63dda14079ea0dc9396aedc1')
    },[])

    return (
        <div className="App">
            <h1>Kanban Board</h1>

            <div className="container">
                <div className="row align-items-start">
                    {statuses.map(status =>
                    <Column status={status} key={status._id}/>)}
                    <button onClick={updateTask}>updateTask</button>
                </div>
            </div>
        </div>
    );
}

export default App;
