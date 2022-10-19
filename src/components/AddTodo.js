import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export const AddTodo = ({ addTodo }) => {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const submit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title or Descripton cannot be blank")
    } else {
      addTodo(title, description);
      setTitle("");
      setDescription("");
    }
  }


  return (
    <div>

      <Form className='form'>
        <h3>Add ToDo</h3>
        <Form.Group className="mb-3" controlId="titile">
          <Form.Label>Title</Form.Label>
          <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter Title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Enter Description" />
        </Form.Group>

        <Button onClick={submit} variant="primary" type="submit">
          Add
        </Button>
      </Form>


    </div>
  )
}