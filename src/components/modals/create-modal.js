import { useState } from "react";
import { Button, Modal, FormControl } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import { connect } from 'react-redux'

import { createNote as createNoteAction } from './../../redux/modules/notes'

const CreateModal = ({ createNote }) => {
  
  const [show, setShow] = useState(false);
  const [inputName, setInputName] = useState('')
  const [inputCategory, setInputCategory] = useState('')
  const [inputContent, setInputContent] = useState('')
    
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = () => {
    createNote({name: inputName, category: inputCategory, content: inputContent})
  };

  return(
  <>
    <Button variant="dark" onClick={handleShow} className="btn mb-3 float-right btn-create-note" data-toggle="modal" data-target="#createNoteModal">Create Note</Button>
  
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3 exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <FormControl
              value={inputName} 
              onInput={e => setInputName(e.target.value)}
              name="name"
              />
          </Form.Group>
          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Select 
              name="category" 
              value={inputCategory} 
              onInput={e => setInputCategory(e.target.value)}>
              <option>Choose category</option>
              <option value="Task">Task</option>
              <option value="Random Thought">Random Thought</option>
              <option value="Idea">Idea</option>
              <option value="Quote">Quote</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Content</Form.Label>
              <FormControl
                value={inputContent} 
                onInput={e => setInputContent(e.target.value)}
                name="content"
                as="textarea"
                />
          </Form.Group>
          <Button variant="dark" onClick={() => {handleClose(); onSubmit(); }}>
              Create
            </Button>
        </Form>
      </Modal.Body>
    </Modal>
  </>
)}

export default connect(
  null,
  {
    createNote: createNoteAction
  }
)(CreateModal)
