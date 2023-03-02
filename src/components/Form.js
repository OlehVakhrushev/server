import React from 'react';

const Form = (props) => {
    console.log(props)
    return (
        <div className="card h-100 text-white bg-success mb-sm-3" style={{border:"3px solid black", margin:"-5px "}}>
            <div className="card-body">
                <h3 className="card-title">{props.task.id}</h3>
                <p className="card-text">{props.task.name}</p>
                <p className="card-text">{props.task.description}</p>
                <p className="card-text">{props.task.status}</p>
                <div className="form-group">
                    <label htmlFor={`priority-${props.task.id}`}>Priority:</label>
                    <input type="number" className="form-control" id={`priority-${props.task.id}`} value={props.task.priority} />
                </div>
                <button type="button" className="btn btn-primary mr-2" onClick={() => props.handleApiCall('PATCH')}>Edit</button>
                <div className="btn-group">
                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        API call
                    </button>
                    <div className="dropdown-menu">
                        <button className="dropdown-item" type="button" onClick={() => props.handleApiCall('GET')}>GET</button>
                        <button className="dropdown-item" type="button" onClick={() => props.handleApiCall('POST')}>POST</button>
                        <button className="dropdown-item" type="button" onClick={() => props.handleApiCall('PATCH')}>PATCH</button>
                        <button className="dropdown-item" type="button" onClick={() => props.handleApiCall('DELETE')}>DELETE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;

// onChange={handlePriorityChange}