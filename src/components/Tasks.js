import React, {useState} from 'react';
import EditTaskModal from "./EditTaskModal";
import DeleteModal from "./DeleteModal";

const Tasks = ({task, changePriority,priorities, statuses, editTask, moveTask, deleteTask}) => {
    console.log(task)
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div className="card mb-3 col-sm-6 col-md-3" style={{width:"auto"}}>

            <div className="card-header">
                {task.status}
            </div>
            <ul className="list-group list-group-flush">

                <li className="list-group-item"><h5><i> {task.name}</i> </h5>
                    <hr/>
                    <h6> {task.description}</h6> </li>

                <li className="list-group-item" >

                    Priority: {task.priority}{' '}
                    <button
                        disabled={+task.priority === priorities[priorities.length-1]}
                        onClick={()=>changePriority(task._id, +task.priority + 1)}
                        type="button" className="btn btn-outline-info">↑</button>
                    <button
                        disabled={+task.priority === priorities[0]}
                        onClick={()=>changePriority(task._id, +task.priority - 1)}
                        type="button" className="btn btn-outline-info">↓</button></li>
                <div>
                    <button type="button" disabled={statuses[0].title === task.status} className="btn btn-outline-info" onClick={()=> moveTask(task._id, task.status, -1)}>←</button>
                    <DeleteModal task={task}
                                 deleteTask={deleteTask}

                    />
                    <button
                        onClick={toggle}
                        type="button" className="btn btn-outline-warning">Edit</button>

                    <button type="button" disabled={statuses[statuses.length-1].title === task.status} className="btn btn-outline-info" onClick={()=> moveTask(task._id, task.status, +1)}>→</button>

                    <EditTaskModal
                        toggle={toggle}
                        modal={modal}
                        setModal={setModal}
                        priorities={priorities}
                        statuses={statuses}
                        task={task}
                        editTask={editTask}
                    />
                </div>

            </ul>
        </div>


    );
};

export default Tasks;