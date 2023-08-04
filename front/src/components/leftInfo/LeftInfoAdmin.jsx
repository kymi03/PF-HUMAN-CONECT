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
    const [userList, setUserList] = useState([]); 
    const [confirmationOpen, setConfirmationOpen] = useState(false); 
    const [currentUserEmail, setCurrentUserEmail] = useState(""); 
    const [selectedUserIndex, setSelectedUserIndex] = useState(null);

    
        const usersData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/user")
                const users = response.data; 
                // console.log('users' );

                dispatch(getUserList()); 
            
            } catch (error) {
                
            }
        };


        function handleUserOption(event) {

          dispatch(getUserOption(event.target.value));
          // console.log(event.target.value);
        }
        

  
  return (

    <div className="flex flex-col items-center justify-center min-h-screen">

<div>
  {userList.map((user) => (
    <div key = {user.id} className="mb-2">
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  ))}
</div>

<div className="max-w-sm p-3  bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">

    
  <img src="https://humanconet.org/wp-content/uploads/2022/05/Tigre-1024x522.webp" alt="" />
  <h1>Makarena Nazar</h1>

      <div className=" p-11">

      <button   
      type="button" 
      value='NO OPTION'
      className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium w-44 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      
      >APROBAR / DAR DE BAJA , Publicacion de contenido </button>

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

      <button   
      type="button" 
      value='NO OPTION'
      className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium w-44 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      onClick={handleUserOption}
      >SUMMARY</button>


      </div>

    

</div>

</div>
  )

}

export default LeftInfoAdmin