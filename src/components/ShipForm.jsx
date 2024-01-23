import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addShip } from '../redux/actions/shipAction';
import { v4 as uuidv4 } from 'uuid';

const ShipForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [type, setType] = useState('Container');

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addShip({
      id: uuidv4(),
      name: name,
      type: type,
    }));
    resetForm();
  }

  const resetForm = () => {
    setName('');
    setType('Container');
  };

  function handleChange(e) {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'type':
        setType(value);
        break;
      default:
        return;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
             name="name"
             value={name}
             placeholder="Enter name"
             required
             onChange={handleChange}/>
      <select id="type"
              name="type"
              value={type}
              placeholder="Select type"
              required
              onChange={handleChange}>
        <option value="Container">Container</option>
        <option value="Bulk">Bulk</option>
        <option value="Tanker">Tanker</option>
      </select>

      <button type="submit">ADD SHIP</button>
    </form>
  );
};

export default ShipForm;
