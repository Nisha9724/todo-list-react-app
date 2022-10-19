import React from 'react'
import { ToDoItem } from './ToDoItem'

export const ToDos = (props) => {
  return (

    <div className='main content'>
      <h3 className='text-a'>Todos List</h3>
      {props.todos.length === 0 ? <h4>Add ToDos</h4>
        :
        props.todos.map((listItem) => {
          return <ToDoItem key={listItem.sno} todo={listItem} onDelete={props.onDelete} />
        })}
    </div>
  )
}