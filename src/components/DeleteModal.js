import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function DeleteModal(props) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const onDelete = () => {
        props.deleteTask(props.task._id);
        toggle();
    }

    return (
        <>
            <Button color="danger" onClick={toggle}>
                Delete
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Delete task</ModalHeader>
                <ModalBody>
                    Are you sure you want to delete {props.task.name}?
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onDelete}>
                        Delete
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default DeleteModal;