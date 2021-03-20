import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const handleClick = id => dispatch({
    type: 'DELETE_TODO',
    payload: id,
  });
  if (!todos || !todos.length) {
    return <p>NO TODOS</p>
  }
  return (
    <ul>
      {todos.map(todo => <li onClick={() => handleClick(todo.id)}>{todo.label}</li>)}
      
    </ul>
  )
}

const TodoInput = () => {
  const dispatch = useDispatch()
  const [newTodo, setNewTodo] = useState();
  const handleChange = e => setNewTodo(e.target.value);
  const handleClick = () => dispatch({
    type: 'ADD_TODO',
    payload: {
      label: newTodo,
      id: Math.ceil(Math.random( )* 100),
    }
  })

  return (
    <>
    
    <input value={newTodo} onChange={handleChange} type="text" />
    <button onClick={handleClick}>ADD TODO</button>
    
    </>
  )
}

function App() {
  return (
    <div className="App">
      <h1>ToDo List w/Redux </h1>
      <Todos />
      <TodoInput />
    </div>
  );
}

export default App;
