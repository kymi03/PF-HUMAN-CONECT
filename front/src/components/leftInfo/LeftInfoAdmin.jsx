import React, { useEffect, useState } from 'react'
import { getSearchPADByQuery, getAllLocations, orderByDate, getUserOption , getUserList } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {
  // GET_ALL_PROJECTS , GET_ALL_LOCATION ,  ORDER_BY_DATE,
  PROJECTS , DOCUMENTARYS , ARTICLES
  } from "../../redux/actions-types";
  import axios from "axios"; 

function LeftInfoAdmin(props) {
const dispatch = useDispatch()
    


        function handleUserOption(event) {

          dispatch(getUserOption(event.target.value));
          
        }
        

  
  return (

    <div className="flex flex-col items-center justify-center min-h-screen" >



<div className="max-w-sm p-3  bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 height 20px" style={{ marginTop: "-270px", height: "650px", borderRadius:"10px", backgroundColor:"#A29F83", borderColor:"grey"}}>

    
  <img src="https://humanconet.org/wp-content/uploads/2022/05/Tigre-1024x522.webp" alt="" />
  <h1 style={{marginTop: "40px", fontSize:"30px", fontFamily: "fantasy"} }>Makarena Nazar</h1>

      <div className=" p-11">

      <button   
      type="button" 
      value='NO OPTION'
      className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium w-44 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      
      > VER DONACIONES </button>

      <button   
      type="button" 
      value='VER USUARIOS'
      className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium w-44 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      onClick={handleUserOption}
      >VER USUARIOS </button>
      
      <button   
      type="button" 
      value='COMENTARIOS'
      className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium w-44 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      // onClick={handleUserOption}
      >? </button>

      {/* <button   
      type="button" 
      value='CONTENIDO GUARDADO'
      className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium w-44 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      onClick={handleUserOption}
      >CONTENIDO GUARDADO</button> */}


      </div>

    

</div>

</div>
  )

}

export default LeftInfoAdmin