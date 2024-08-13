
import { configureStore } from '@reduxjs/toolkit';
// import todoReducer from './features/todos/todoSlice';
import todoReducer from './todoSlice'

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
