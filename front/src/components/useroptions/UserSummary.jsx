import React, { useEffect, useState } from 'react';
import Card from '../card/Card.jsx';
import { useSelector } from 'react-redux';
import axios from 'axios';

function UserSummary(props) {
  const User = useSelector((state) => state.userAuth);
  const [comments, setComments] = useState([]);
  const [donations, setDonations] = useState([]);



  const getComments = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3001/comments?userID=${id}`);
      setComments(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getDonations = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3001/donations?userID=${id}`);
      setDonations(response.data);
      console.log(response.data);

    } catch (error) {
      console.log(error.message);
    }
  };


  useEffect(() => {

if (User.id) {

  console.log(User.id);
  getComments(User.id);
  getDonations(User.id);

}

  }, [User]);

  const getTotalDonationAmount = () => {
    return donations.reduce((total, donation) => {
      return total + Object.values(donation.amounts).reduce((sum, value) => sum + value, 0);
    }, 0);
  };

  return (
    <div className="flex bg-white mr-10 p">
      <div className="">
       <div className="flex border border-grey       bg-white rounded-md mb-1 p-0.5">
        <h2>Nombre:</h2>
        <h3>{User.name}</h3>
      </div>
       <div className="flex border border-grey       bg-white rounded-md mb-1 p-0.5">
        <h2>Apellido:</h2>
        <h3>{User.lastName}</h3>
      </div>
       <div className="flex border border-grey       bg-white rounded-md mb-1 p-0.5">
        <h2>Email:</h2>
        <h3>{User.email}</h3>
      </div>
       <div className="flex border border-grey       bg-white rounded-md mb-1 p-0.5">
        <h2>Telefono:</h2>
        <h3>{User.phone}</h3>
      </div>
       <div className="flex border border-grey       bg-white rounded-md mb-1 p-0.5">
        <h2>Comentarios:</h2>
        <h3>{comments.length}</h3>
      </div>
       <div className="flex border border-grey       bg-white rounded-md mb-1 p-0.5">
        <h2>Estado:</h2>
        <h3>{User.active === true ? "Activo" : "Inactivo"}</h3>
      </div>
      </div>

      <div className="flex border  border-sky-700       bg-white rounded-md p-0.5">
      <div >
        {donations.map((donation, index) => (
          <div key={donation._id}>
            <h2>
              Donacion {index + 1} - {Object.values(donation.amounts).reduce((sum, value) => sum + value, 0)}
            </h2>
            <ul>
              {Object.entries(donation.amounts).map(([key, value]) => (
                <li key={key}>{key}</li>
              ))}
            </ul>
          </div>
        ))}

      </div>
        <h2>Total donado: {getTotalDonationAmount()}</h2>
    </div>
    </div>
  );
}

export default UserSummary;
