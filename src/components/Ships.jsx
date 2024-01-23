import React from 'react';
import ShipForm from './ShipForm';
import { useSelector, useDispatch } from 'react-redux';
import { removeShip } from '../redux/actions/shipAction';

const Ships = () => {
  const dispatch = useDispatch();
const ships = useSelector(state => state.ships)
  function handleRemoveShip(ship) {
    dispatch(removeShip(ship))
  }

  return (
    <div className="center">
      <ShipForm/>
      <div>
        <ul>
          {ships.map((ship) => (
            <li key={ship.id}>
              <h2>
                <span>Name:</span> {ship.name}
              </h2>
              <p>
                <span>Type:</span> {ship.type}
              </p>
              <button onClick={() => handleRemoveShip(ship)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Ships;
