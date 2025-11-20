import React from 'react'

export default function TodoList({ todos, removeTodo, toggleTodo }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          <span onClick={() => toggleTodo(todo.id)} style={{cursor: 'pointer', flex: 1}}>
            {todo.completed ? '✅ ' : 'Dw '} {}
            {todo.text}
          </span>
          <button onClick={() => removeTodo(todo.id)}>❌</button>
        </li>
      ))}
    </ul>
  )
}