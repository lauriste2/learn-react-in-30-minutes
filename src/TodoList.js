import React from 'react'
import Todo from './Todo'
export default function TodoList({todos,toggleTodo}) {
    
  return (
 todos.map(todo => {
return <Todo key = {todo.Id} toggleTodo ={toggleTodo} todo = {todo}/>
})
  )

// return (
// todos.map(todo => (
//     <div>
//      C:  <input type="checkbox" checked={todo.Complete}  ></input>
//        N : {todo.Name}  
//        {/* : {todo.Id}   */}
    
//       </div>
//   )
//   ) 
// )


  


  
}


