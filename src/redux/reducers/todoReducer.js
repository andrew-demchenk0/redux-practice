import { createReducer } from '@reduxjs/toolkit';
import { addTodo, removeTodo } from '../actions/todoAction';

const initialState = []
const todoReducer = createReducer(initialState, builder => {
  builder
    .addCase(addTodo, (state, action) => {
      state.push(action.payload);
    })
    .addCase(removeTodo, (state, action) => {
      return state.filter(todo => todo.id !== action.payload.id)
    })
})

export default todoReducer;
