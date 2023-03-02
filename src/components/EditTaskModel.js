import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function EditTaskModal(props) {
    const [status, setStatus]=useState(props.task.status)
    const [priority, setPriority]=useState(props.task.priority)
    const [name, setName]=useState(props.task.name)
    const [description, setDescription]=useState(props.task.description)



    const onSave = () => {
        const newTask ={status, priority, name, description }
        props.editTask(props.task._id, newTask)
        props.toggle()

    }

    return (
        <div>
            <Modal isOpen={props.modal} toggle={props.toggle} {...props}>
                <ModalHeader toggle={props.toggle}>Edit task</ModalHeader>
                <ModalBody>
                    <label htmlFor="inputPassword5" className="form-label">Task name</label>
                    <input  value={name}
                            onChange={(event)=>setName(event.target.value)}
                            type="text"
                            id="inputPassword5"
                            className="form-control"
                            aria-describedby="passwordHelpBlock"/>
                    <label htmlFor="inputPassword5" className="form-label">Task description</label>
                    <input value={description}
                           onChange={(event)=>setDescription(event.target.value)}
                           type="text"
                           id="inputPassword5"
                           className="form-control"
                           aria-describedby="passwordHelpBlock"/>
                    <br/>
                    <div className="form-floating">
                        <select
                            value={priority}
                            onChange={(event)=>setPriority(event.target.value)}
                            className="form-select" id="floatingSelect" aria-label="Floating label select example">

                            {props.priorities.map((el, ind)=>
                                <option
                                    key={ind}
                                    value={el} >{el}</option> )}

                        </select>
                        <label
                            htmlFor="floatingSelect">Priority</label>
                    </div>
                    <br/>
                    <div className="form-floating">
                        <select
                            value={status}
                            onChange={(event)=>setStatus(event.target.value)}
                            className="form-select"
                            id="floatingSelect"
                            aria-label="Floating label select example">

                            {props.statuses.map(el=>
                                <option
                                    key={el._id}
                                    value={el.title} >{el.title}</option> )}

                        </select>
                        <label htmlFor="floatingSelect">Status</label>
                    </div>

                </ModalBody>

                <ModalFooter>
                    <Button
                        color="primary" onClick={onSave}>
                        Save
                    </Button>{' '}
                    <Button color="secondary" onClick={props.toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default EditTaskModal;