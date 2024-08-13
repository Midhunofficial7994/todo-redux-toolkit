// src/components/TodoList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../todoSlice';
import Todo from './Todo.jsx';

function TodoList() {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
        />
        <button type="submit">Add</button>
      </form>
      <div>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
