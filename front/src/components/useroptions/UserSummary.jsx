import React, { useEffect, useState } from 'react';
import Card from '../card/Card.jsx';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { ARTICLES , PROJECTS , DOCUMENTARYS } from '../../redux/actions-types';
import { getSearchPADByQuery , getPadByCommentReference} from '../../redux/actions.js';
import {Link, useLocation} from 'react-router-dom'

function UserSummary(props) {
  const User = useSelector((state) => state.userAuth);



  const [comments, setComments] = useState([]);
  const [donations, setDonations] = useState([]);


const dispatch =useDispatch()
const comentasANDinfo     = useSelector(state => state.PADandREFERENCE)
const userOption     = useSelector(state => state.userOption)
  

  const getComments = async (id) => {
    try {
      const response = await axios.get(`/comments?userID=${id}`);
      setComments(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getDonations = async (id) => {
    try {
      const response = await axios.get(`/donations?userID=${id}`);
      setDonations(response.data);

    } catch (error) {
      console.log(error.message);
    }
  };


  useEffect(() => {
    if (User.id) {
      getComments(User.id); // Fetch comments when component mounts
      getDonations(User.id); // Fetch donations when component mounts
    }
  }, [User.id]);

//   useEffect(() => {

// // if (User.id) {

//   // } 
// }, [ User] );
  

 

  // const combinedData = [...Articles, ...Projects, ...Documentarys];

  // setContentList(combinedData);
  // console.log(combinedData);
  // console.log(Articles);
  // console.log(Projects);
  // console.log(Documentarys);


  const getTotalDonationAmount = () => {
    return donations.reduce((total, donation) => {
      return total + Object.values(donation.amounts).reduce((sum, value) => sum + value, 0);
    }, 0);
  };

  return (
    <div className="flex bg-white mr-10 ">
    <div className="flex-col border  border-sky-700   m-5     bg-white rounded-md p-0.5">
          <h2>Tu datos personales</h2>
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

    <div className="flex-col border  border-sky-700   m-5      bg-white rounded-md p-0.5">
    <h2>Tu historial de donaciones</h2>
        {donations.map((donation, index) => (
         <div className="flex-col border border-grey       bg-white rounded-md mb-1 p-0.5" key={index} >

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

        <h2 >Total donado: {getTotalDonationAmount()}</h2>
    
    </div>

    <div className="flex-col border  border-sky-700   m-5      bg-white rounded-md p-0.5">
    <h2>Tu historial de comentarios:</h2>

{comentasANDinfo.map( (coment , index )=> 

(
<Link to={`/detail/${coment.padInfo.ContentType}=${coment.padInfo._id}`}>
  <div className="flex-col border border-grey       bg-white rounded-md mb-1 p-0.5" key={index} >
          


  <h2 >Conetenido: {coment.padInfo.name}</h2>
  <h2>Tu Comentario: {coment.comment.body}</h2>
  </div>
</Link>
  )

)}

    
    </div>

    </div>
  );
}

export default UserSummary;
