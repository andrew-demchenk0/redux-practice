import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {addTodo, removeTodo} from '../redux/actions/todoAction';

const Todo = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');
  const todos = useSelector(state => state.todos)

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTodo({
      id: uuidv4(),
      name: todo,
    }));
    resetForm();
  }
  function resetForm(){
    setTodo('');
  }

  function handleChange(e) {
    const {value} = e.currentTarget;
    setTodo(value)
  }

  function handleRemoveTodo(todo){
    dispatch(removeTodo(todo));
  }
  return (
    <>
      <div className="center">
        <form onSubmit={handleSubmit}>
          <input type="text"
                 name="task"
                 value={todo}
                 placeholder="Enter your task"
                 onChange={handleChange}
                 required/>
          <button type="submit">ADD</button>
        </form>
      </div>
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <h2>
                <span>Task:</span> {todo.name}
              </h2>
              <button onClick={() => handleRemoveTodo(todo)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
