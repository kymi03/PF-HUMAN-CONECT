import React from 'react';
import Card from '../card/Card.jsx';
import { useSelector } from 'react-redux';


function UserSummary(props) {

const User = useSelector(state => state.userAuth)

  return (
    <div className=" bg-white mr-10">
        <div className="flex">
          <h2>Nombre:</h2>
          <h3>{User.name}</h3>
        </div>
        <div className="flex">
          <h2>Apellido:</h2>
          <h3>{User.lastName}</h3>
        </div>
        <div className="flex">
          <h2>Email:</h2>
          <h3>{User.email}</h3>
        </div>
        <div className="flex">
          <h2>Numero:</h2>
          <h3>{User.phone}</h3>
        </div>

    
    </div>
  );
}

export default UserSummary;
