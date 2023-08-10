import React, { useEffect, useState } from 'react';
import Card from '../card/Card.jsx';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { ARTICLES, PROJECTS, DOCUMENTARYS } from '../../redux/actions-types';
import { getSearchPADByQuery, getPadByCommentReference } from '../../redux/actions.js';
import { Link, useLocation } from 'react-router-dom'

function UserSummary(props) {
  const User = useSelector((state) => state.userAuth);



  const [comments, setComments] = useState([]);
  const [donations, setDonations] = useState([]);


  const dispatch = useDispatch()
  const comentasANDinfo = useSelector(state => state.PADandREFERENCE)
  const userOption = useSelector(state => state.userOption)


  const getComments = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3001/comments?userID=${id}`);
      setComments(response.data); // Update the comments state
      dispatch(getPadByCommentReference(response.data)); // Dispatch action with updated comments
    } catch (error) {
      console.log(error.message);
    }
  };

  const getDonations = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3001/donations?userID=${id}`);
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
    <div className="flex bg-white mr-10 border
    rounded-2xl">
      <div className="flex-col border     m-5     bg-white rounded-md p-0.5">
        <h2
          className="flex justify-center bg-amber-400 mb-2 text-black w-12/12 font-gilroy font-bold text-lg py-1 px-2 rounded-lg 
          pointer   " >Tu datos personales</h2>
        <div className="flex border border-grey       bg-white rounded-md mb-1 p-0.5">
          <h2 className=" font-gilroy font-bold" >Nombre : </h2>
          <h3>{User.name}</h3>
        </div>
        <div className="flex border border-grey       bg-white rounded-md mb-1 p-0.5">
          <h2 className=" font-gilroy font-bold">Apellido : </h2>
          <h3>{User.lastName}</h3>
        </div>
        <div className="flex border border-grey       bg-white rounded-md mb-1 p-0.5">
          <h2 className=" font-gilroy font-bold" >Email : </h2>
          <h3>{User.email}</h3>
        </div>
        <div className="flex border border-grey       bg-white rounded-md mb-1 p-0.5">
          <h2 className=" font-gilroy font-bold" >Telefono :</h2>
          <h3> {User.phone}</h3>
        </div>
        <div className="flex border border-grey       bg-white rounded-md mb-1 p-0.5">
          <h2 className=" font-gilroy font-bold" >Comentarios :</h2>
          <h3>{comments.length}</h3>
        </div>
        <div className="flex border border-grey       bg-white rounded-md mb-1 p-0.5">
          <h2 className=" font-gilroy font-bold" >Estado:</h2>
          <h3>{User.active === true ? "Activo" : "Inactivo"}</h3>
        </div>
      </div>

      <div className="flex-col border     m-5      bg-white rounded-md p-0.5">
        <h2 className="flex justify-center bg-amber-400 mb-2 text-black w-12/12 font-gilroy font-bold text-lg py-1 px-2 rounded-lg 
pointer   ">Tu historial de donaciones</h2>
        {donations.map((donation, index) => (
          <div className="flex-col border border-grey       bg-white rounded-md mb-1 p-0.5" key={index} >

            <h2 className=" font-gilroy font-bold" >
              Donación {index + 1} - {Object.values(donation.amounts).reduce((sum, value) => sum + value, 0)}
            </h2>
            <ul key={index}>
              {Object.entries(donation.amounts).map(([key, value]) => (
                <li key={key}> - {key}</li>
              ))}
            </ul>
          </div>
        ))}

        <h2 >Total donado: {getTotalDonationAmount()}</h2>

      </div>

      <div className="flex-col border     m-5      bg-white rounded-md p-0.5">
        <h2 className="flex justify-center bg-amber-400 mb-2 text-black w-12/12 font-gilroy font-bold text-lg py-1 px-2 rounded-lg 
          pointer   " >Tu historial de comentarios:</h2>

        {comentasANDinfo.map((coment, index) =>

        (
          <Link key={index} to={`/detail/${coment.padInfo.ContentType}=${coment.padInfo._id}`}>

            <div className="flex-col border border-grey       bg-white rounded-md mb-1 p-0.5" key={index} >



              <h2 className=" font-gilroy font-bold">Conetenido: </h2>
              <h2 > {coment.padInfo.name}</h2>
              <br></br>
              <h2 className=" font-gilroy font-bold" >Tu Comentario:</h2>
              <h2> {coment.comment.body}</h2>

            </div>

          </Link>

        )

        )}


      </div>

    </div>
  );
}

export default UserSummary;
