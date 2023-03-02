import React from 'react';
import Task from "./Task";

const Column = (props) => {

    return (

        <div className="col">
            <h3> {props.status.title.toUpperCase()} </h3>
            {props.tasks.filter(task=>
                task.status===props.status.title).map(task=>
                <Task
                    task={task}
                    key={task._id}
                    changePriority={props.changePriority}
                    priorities={props.priorities}
                    statuses={props.statuses}
                    editTask={props.editTask}
                />
            )}

        </div>

    );
};

export default Column;
