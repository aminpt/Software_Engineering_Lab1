import React, { useState } from 'react'
import TodoList from './components/TodoList.jsx'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Build the Git and CI/CD project' },
    { id: 2, text: 'Practice merging and resolving conflicts' },
  ])
  const [newTodo, setNewTodo] = useState('')

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo }])
      setNewTodo('')
    }
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  return (
    <div className="app">
      <h1>📋 Team CI/CD Development Todo List</h1>
      <div className="input-area">
        <input 
          placeholder="Add a new task..."
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoList todos={todos} removeTodo={removeTodo} />
      <footer className="footer">
        <p>Created by Amin Pourtavanaie and Davood Kareshki</p>
      </footer>
    </div>
  )
}

export default App
