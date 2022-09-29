import React from 'react'

export default function Todo({todo,toggleTodo}) {
  function handleTodClick()
  {
    toggleTodo(todo.Id)
  }

  return (
    <div>
    <>
    {<input type="checkbox" checked={todo.Complete}  onChange={handleTodClick} ></input> }
   {todo.Name}
    </>
    </div>
  )
}
