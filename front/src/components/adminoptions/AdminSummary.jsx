import React, { useEffect, useState } from 'react';
import Card from '../card/Card.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchPADByQuery, getUserList  , getAllComments} from '../../redux/actions.js';
import {
  PROJECTS , DOCUMENTARYS , ARTICLES
  } from "../../redux/actions-types.js";
import axios from 'axios';

function AdminSummary(props) {

  const dispatch = useDispatch()

 
  const allProjects =     useSelector(state =>     state.allProjects)
  const allArticles =     useSelector(state =>     state.allArticles)
  const allDocumentarys = useSelector(state => state.allDocumentarys)
  const allComents = useSelector((state) => state.allComents);

  const [donationList, setDonationList] = useState([]); 


  const allUsers = useSelector(state => state.userList)
  const donationsData = async () => {
    try {
      const response = await axios.get("/donations");
      const donations = response.data;
      setDonationList(donations); // Actualizar el estado userList con los datos obtenidos
    } catch (error) {
      // Manejo de errores (opcional)
      console.error('Error al obtener las donaciones:', error);
    }
  };



  useEffect( () => {

dispatch(getUserList())
dispatch(getAllComments())
dispatch(getSearchPADByQuery('' , '' , PROJECTS    ))
dispatch(getSearchPADByQuery('' , '' , DOCUMENTARYS))
dispatch(getSearchPADByQuery('' , '' , ARTICLES    ))

    
  
    donationsData();

  } , [ 
        // allProjects     , 
        // allArticles     ,
        // allDocumentarys ,
      ])

const activeUsers = allUsers.filter(user => user.active === true)
const inActiveUsers =  allUsers.filter(user => user.active !== true)
let Autors =[]

allComents.map(Comment => Autors.push(Comment.author))
const getUnique = (array) => {
  const uniques = [];
  const uniqueKeys = new Set();

  for (const loc of array) {
    const key = loc.trim().toLowerCase();
    if (!uniqueKeys.has(key)) {
      uniqueKeys.add(key);
      uniques.push(
        loc
          // .toLowerCase()
          .split(" ")
          // .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      );
    }
  }



  return uniques;
};

function sumAllAmounts(arrayOfObjects) {
  let totalSum = 0;

  arrayOfObjects.forEach((obj) => {
    for (const amount in obj.amounts) {
      if (typeof obj.amounts[amount] === 'number') {
        totalSum += obj.amounts[amount];
      }
    }
  });

  return totalSum;
}

const countPaidStatus = (data) => {
  let paidTrueCount = 0;
  let paidFalseCount = 0;

  for (const item of data) {
    if (item.paid === true) {
      paidTrueCount++;
    } else {
      paidFalseCount++;
    }
  }

  return { paidTrueCount, paidFalseCount };
};

const { paidTrueCount, paidFalseCount } = countPaidStatus(donationList);

const totalAmount = sumAllAmounts(donationList);

let uniqueAutors = getUnique(Autors)



  // return (
  //    <div className="flex bg-white mr-10">
  //    <div className=" bg-white mr-10">
  //     <h1>Contenidos:</h1>
  //     <h1>Total Proyectos: {allProjects.length}</h1>
  //     <h1>Total Articulos: {allArticles.length}</h1>
  //     <h1>Total Documentales: {allDocumentarys.length}</h1>
  //     <h1>Total de Contenidos: {allDocumentarys.length+allDocumentarys.length+allProjects.length}</h1>
  //    </div>
  //    <div className=" bg-white mr-10">
  //     <h1>Usuarios:</h1>
  //     <h1>Total de usuarios activos: {activeUsers.length}</h1>
  //     <h1>Total de usuarios inactivos: {inActiveUsers.length}</h1>
  //     <h1>Total de Usuarios: {allDocumentarys.length+allDocumentarys.length+allProjects.length}</h1>
  //    </div>
  //    <div className=" bg-white mr-10">
  //     <h1>Comentarios:</h1>
  //     <h1>Total Comentarios: {allComents.length}</h1>
  //     <h1>Total Comentadores: {uniqueAutors.length}</h1>

  //    </div>
  //    <div className=" bg-white mr-10">
  //     <h1>Donaciones:</h1>
  //     <h1>Total Donaciones: {donationList.length}</h1>
  //     <h1>Total Donado: {totalAmount}</h1>
  //     <h1>Total Donaciones exitosas: {paidTrueCount}</h1>
  //     <h1>Total Donaciones fallidas: {paidFalseCount}</h1>
  //    </div>
  //    </div>
  // );
  return (
    <div className="flex bg-white p-5 mt-24 h-96  border border-sky-700 space-x-4 rounded-md">
      <div className="flex-col border  m-5 bg-white rounded-md p-0.5">
        <h2 className=" m-2  p-2 flex justify-center bg-blueGrey  mb-2 text-black w-12/12 font-gilroy font-bold text-lg py-1 px-2 rounded-lg pointer">Contenidos:</h2>
        <h1 className=" m-2  p-2 font-bold">Total Proyectos: {allProjects.length}</h1>
        <h1 className=" m-2  p-2   bg-blueGrey rounded-md font-bold">Total Articulos: {allArticles.length}</h1>
        <h1 className=" m-2  p-2 font-bold">Total Documentales: {allDocumentarys.length}</h1>
        <h1 className=" m-2  p-2   bg-blueGrey rounded-md  font-bold">Total de Contenidos: {allDocumentarys.length + allDocumentarys.length + allProjects.length}</h1>
      </div>
      <div className="flex-col border  m-5 bg-white rounded-md p-0.5">
        <h2 className=" m-2  p-2 flex justify-center  bg-blueGrey mb-2 text-black w-12/12 font-gilroy font-bold text-lg py-1 px-2 rounded-lg pointer">Usuarios:</h2>
        <h1 className=" m-2  p-2 font-bold">Total de usuarios activos: {activeUsers.length}</h1>
        <h1 className=" m-2  p-2 font-bold bg-blueGrey rounded-md" >Total de usuarios inactivos: {inActiveUsers.length}</h1>
        <h1 className=" m-2  p-2 font-bold">Total de Usuarios: {allDocumentarys.length + allDocumentarys.length + allProjects.length}</h1>
      </div>
      <div className=" flex-col border  m-5 bg-white rounded-md p-0.5">
        <h2 className=" m-2  p-2 flex justify-center  bg-blueGrey mb-2 text-black w-12/12 font-gilroy font-bold text-lg py-1 px-2 rounded-lg pointer">Comentarios:</h2>
        <h1 className=" m-2  p-2 font-bold ">Total Comentarios: {allComents.length}</h1>
        <h1 className=" m-2  p-2 font-bold bg-blueGrey rounded-md">Total Comentadores: {uniqueAutors.length}</h1>
      </div>
      <div className="flex-col border  m-5 bg-white rounded-md p-0.5">
        <h2 className=" m-2  p-2 flex justify-center  bg-blueGrey mb-2 text-black w-12/12 font-gilroy font-bold text-lg py-1 px-2 rounded-lg pointer">Donaciones:</h2>
        <h1 className=" m-2  p-2 font-bold">Total Donaciones: {donationList.length}</h1>
        <h1 className=" m-2  p-2 font-bold bg-blueGrey rounded-md">Total Donado: {totalAmount}</h1>
        <h1 className=" m-2  p-2 font-bold">Total Donaciones exitosas: {paidTrueCount}</h1>
        <h1 className=" m-2  p-2 font-bold bg-blueGrey rounded-md">Total Donaciones fallidas: {paidFalseCount}</h1>
      </div>
    </div>
  );
  

}

export default AdminSummary;
