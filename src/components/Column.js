import React from 'react';
import Tasks from "./Tasks";

const Column = (props) => {

    return (

        <div className="col">
            <h3> {props.status.title.toUpperCase()} </h3>
            {props.tasks.filter(task=>
                task.status===props.status.title).map(task=>
                <Tasks
                    task={task}
                    key={task._id}
                    changePriority={props.changePriority}
                    priorities={props.priorities}
                    statuses={props.statuses}
                    editTask={props.editTask}
                    moveTask={props.moveTask}
                    deleteTask={props.deleteTask}
                />
            )}

        </div>

    );
};

export default Column;
