import TodoList from './TodoList';
import uuid4 from "uuid4";

import './App.css';
import React, { useState, useRef, useEffect } from 'react';
const localStorageKey = 'todapp.todos'

function App() {
  let [todos, setTodos] = useState([{ Id: 1, Name: 'Todo1', Complete: false }, { Id: 2, Name: 'Todo2', Complete: true }])
  const todoNameRef = useRef()

  // Not working
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(localStorageKey))
    if (storedTodos) {
      setTodos(storedTodos)
    }
  }, [])

  // Not working
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.Id === id)
    todo.Complete = !todo.Complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {

    const name = todoNameRef.current.value

    if (name === '') return
    var id = uuid4()

    setTodos(prevTodos => {
      return [...prevTodos, { Id: id, Name: name, Complete: false }]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.Complete)
    setTodos(newTodos)
  }
  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>add todo</button>
      <button onClick={handleClearTodos}>Clear Complete</button>
      <div>{todos.filter(todo => !todo.Complete).length}  left to do</div>
    </>
  );
  //return null
  // <div className="App">
  //   <header className="App-header">

  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div>



}

export default App;
