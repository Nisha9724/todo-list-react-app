import React from 'react'
import Button from 'react-bootstrap/Button'

export const ToDoItem = ({todo, onDelete}) => {
  return (
    <div className='content'>
      <h4>{todo.title}</h4>
      <p>{todo.description}</p>
      <Button variant="primary" size="sm" onClick={() => {onDelete(todo)}}>Delete</Button>
    </div>
  )
}