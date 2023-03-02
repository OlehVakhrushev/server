import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from "./Form";

const TaskCard = (props) => {
    return (
        <div className="container-fluid">
            <div className="row align-items">
                {props.status.map(el =>
                    <Form key={el.id}
                          product={el}
                          handleApiCall={props.handleApiCall}
                    />
                )}
            </div>
        </div>


    )
}

export default TaskCard;