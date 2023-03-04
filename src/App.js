import axios from 'axios';
import './App.css';
import {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Column from "./components/Column";
import CreateModal from "./components/CreateModal";
function App() {
    const[statuses,setStatuses]=useState([])
    const[tasks,setTasks]=useState([])
    const priorities=[1,2,3,4,5,6,7,8,9,10]
    const getStatuses  = () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        axios.get('https://expressjs-server.vercel.app/statuses')
            .then( (res)=>{
                // handle success
                setStatuses(res.data);
            })
            .catch((err)=> {
                // handle error
                alert('trouble');
            })
    }
    const getTasks  = () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        axios.get('https://expressjs-server.vercel.app/tasks')
            .then( (res)=>{
                // handle success
                setTasks(res.data);
            })
            .catch((err)=> {
                // handle error
                alert('trouble');
            })
    }


    useEffect(()=>{
        getStatuses();
        getTasks()
    },[])
    console.log(tasks)

    // const updateTask = (id) => {
    //   const newStatus={status:"done"}
    //   axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`,
    //       newStatus).then((res)=>{
    //     console.log(res)
    //   })
    //       .catch((err)=>{
    //         alert('server kaput')
    //       })
    // }
    const changePriority = (id,priority) => {
        axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`,{
            priority
        }).then(res=>
            getTasks())
            .catch(err=>
                alert("did not change priority"))
    }
    const editTask = (id, newTask) => {
        axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`, newTask)
            .then(res=>
                getTasks())
            .catch(err=>
                alert('failed changing'))
    }


    const moveTask = (id, oldStatus, direction) => {
        const newStatuses = statuses.map((status)=> status.title);
        const oldStatusIndex = newStatuses.indexOf(oldStatus);
        const newStatusIndex = oldStatusIndex + direction;
        const newStatus = newStatuses[newStatusIndex];
        axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`, {status: newStatus})
            .then((res)=> {
                getTasks()
            }).catch((err)=> {
                alert("Failed to move task")
        })
    }

    const deleteTask = (id) => {
        axios.delete(`https://expressjs-server.vercel.app/tasks/${id}`)
            .then((res)=> {
                getTasks()
            }).catch((err)=> {
                alert('Failed to delete task')
        })
    }

    const createTask = (newTask) => {
        axios.post(`https://expressjs-server.vercel.app/tasks/`, newTask)
            .then((res)=> {
                getTasks()
            }).catch((err)=> {
                alert('Failed to create new task')
        })
    }


    return (
        <div className="App">
            <h1>Kanban board</h1>
            <CreateModal
                statuses={statuses}
                priorities={priorities}
                createTask={createTask}

            />
            {/*<button onClick={()=>updateTask("63961cc83be09ca981162e5f")}>update</button>*/}
            <div className="container  style={{border:'2px solid blue'}}">
                <div className="row align-items-start ">
                    {statuses.map((status)=>
                        <Column status={status} key={status._id}
                                tasks={tasks}
                                changePriority={changePriority}
                                priorities={priorities}
                                statuses={statuses}
                                editTask={editTask}
                                moveTask={moveTask}
                                deleteTask={deleteTask}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;