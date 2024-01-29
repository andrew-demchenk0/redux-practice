import { configureStore } from '@reduxjs/toolkit';
import  counterReducer  from './reducers/counterReducer';
import shipReducer from './reducers/shipReducer';
import todoReducer from './reducers/todoReducer';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    ships: shipReducer,
    todos: todoReducer,
  }
})

export default store;
