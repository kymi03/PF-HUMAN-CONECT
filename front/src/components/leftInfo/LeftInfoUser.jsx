import React, { useEffect, useState } from 'react'
import { getSearchPADByQuery, getAllLocations, orderByDate, getUserOption  } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import {
  // GET_ALL_PROJECTS , GET_ALL_LOCATION ,  ORDER_BY_DATE,
  PROJECTS , DOCUMENTARYS , ARTICLES
  } from "../../redux/actions-types";
  import { Link } from 'react-router-dom';
function LeftInfoUser(props) {

const dispatch = useDispatch()

  function handleUserOption(event) {

    dispatch(getUserOption(event.target.value));
    // console.log(event.target.value);
  }
  
  return (

    <div className="max-w-sm p-3  bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">

    
<img src="https://humanconet.org/wp-content/uploads/2022/05/Tigre-1024x522.webp" alt="" />
<h1>Makarena Nazar</h1>

    <div className=" p-5">

     <button   
    type="button" 
    value='NO OPTION'
    className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium w-44 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    onClick={handleUserOption}
    >RESUMEN</button>

     <button   
    type="button" 
    value='DONACIONES'
    className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium w-44 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    onClick={handleUserOption}
    >DONACIONES</button>
    
     <button   
    type="button" 
    value='COMENTARIOS'
    className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium w-44 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    onClick={handleUserOption}
    >COMENTARIOS</button>

     <button   
    type="button" 
    value='CONTENIDO GUARDADO'
    className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium w-44 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    onClick={handleUserOption}
    >CONTENIDO GUARDADO</button>

     <button   
    type="button" 
    value='PUBLICACIONES'
    className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium w-44 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    onClick={handleUserOption}
    >PUBLICACIONES</button>

     <button   
    type="button" 
    value='CONFIGURACION DE USUARIO'
    className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium w-44 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    onClick={handleUserOption}
    >CONFIGURACION DE USUARIO</button>

    </div>

        
    
</div>

  )
}

export default LeftInfoUser