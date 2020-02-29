import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CreateTask(props) {
    const [title, setTitle] = useState('');
    const [show, setShow]   = useState('');

    const handleSubmit = (async () => {
        await fetch(`https://reluviaris-task-manager-api.herokuapp.com/tasks`,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    task: { title: title, done: false }
                })
            }
        )
        setShow(false)
        setTitle('')
        props.loadTasks();
    });

    return (
        <div>
            <Button onClick={e => setShow(true)} variant="dark" className="float-right create_task_btn">+ Tarefas</Button>

            <Modal show={show || false} onHide={e => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Nova Tarefa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control type="text" placeholder="Digite sua nova tarefa..." value={title || ''} onChange={e => setTitle(e.target.value)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={e => setShow(false)}>
                        Fechar
                    </Button>
                    <form onSubmit={handleSubmit}>
                        <Button variant="dark" type="submit">
                            Adicionar
                        </Button>
                    </form>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CreateTask;