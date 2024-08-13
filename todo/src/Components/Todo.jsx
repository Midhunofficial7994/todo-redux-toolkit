import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { deleteTodo, toggleComplete, editTodo } from '../features/todos/todoSlice';
import { deleteTodo,toggleComplete,editTodo } from '../todoSlice';

function Todo({ todo }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  // const handleEdit = () => {
  //   if (isEditing) {
  //     dispatch(editTodo({ id: todo.id, text: newText }));
  //   }
  //   setIsEditing(!isEditing);
  // };

  return (
    <div>
      {isEditing ? (
        <input 
          type="text" 
          value={newText} 
          onChange={(e) => setNewText(e.target.value)} 
        />
      ) : (
        <span 
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          onClick={() => dispatch(toggleComplete(todo.id))}
        >
          {todo.text}
        </span>
      )}
      {/* <button onClick={handleEdit}>
        {isEditing ? 'Save' : 'Edit'}
      </button> */}
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </div>
  );
}

export default Todo;
