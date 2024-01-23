import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/actions/counterAction';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  function handleIncr() {
    dispatch(increment());
  }

  function handleDecr() {
    dispatch(decrement());
  }

  return (
    <div className="center">
      <h2>counter value: {counter}</h2>
      <button onClick={handleIncr}>incr+</button>
      <button onClick={handleDecr}>decr-</button>
    </div>
  );
};

export default Counter;
