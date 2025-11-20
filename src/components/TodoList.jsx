import React from 'react'

export default function TodoList({ todos, removeTodo }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => removeTodo(todo.id)}>❌</button>
        </li>
      ))}
    </ul>
  )
}