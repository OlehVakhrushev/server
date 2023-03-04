import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function CreateModal(props) {
    const [modal, setModal] = useState(false);
    const [status, setStatus]=useState(props.statuses[0].title)
    const [priority, setPriority]=useState(props.priorities[0])
    const [name, setName]=useState('')
    const [description, setDescription]=useState('')

    const toggle = () => {
        setModal(!modal)
        setStatus(props.statuses[0].title)
        setPriority(props.priorities[0])
        setName('')
        setDescription('')
    };

    const onCreate = () => {
        const newTask ={status, priority, name, description }
        props.createTask(newTask)
        toggle();

    }

    return (
        <div>
            <Button color="warning" onClick={toggle}>
                Create Task
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create new task</ModalHeader>
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
                    <Button color="primary" onClick={onCreate}>
                        Create
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default CreateModal;