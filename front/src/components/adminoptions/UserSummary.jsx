import React from 'react';
import Card from '../card/Card.jsx';
import { useSelector } from 'react-redux';


function UserSummary(props) {

const UserList = useSelector(state => state.userList)
console.log(UserList);
  return (
    <div className=" bg-white mr-10">
      <h1>Resumen del usuario, datos generales edad , telefono estatus etc , ej: Makarena:🌻</h1>
    </div>
  );
}

export default UserSummary;
