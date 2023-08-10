import React, { useEffect, useState } from 'react'
import { getSearchPADByQuery, getAllLocations, orderByDate, getUserOption , getUserList } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'


function LeftInfoAdmin(props) {
const dispatch = useDispatch()
const user = useSelector(state => state.userAuth)
    


        function handleUserOption(event) {

          dispatch(getUserOption(event.target.value));
          
        }
        

  
  return (

    <div className="flex flex-col items-center justify-center min-h-screen" >



<div className="max-w-sm p-3  bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 height 20px" style={{ marginTop: "-145px", height: "560px", borderRadius:"10px", backgroundColor:"#FEFEFA", borderColor:"grey"}}>

    
  <img src="https://humanconet.org/wp-content/uploads/2022/05/Tigre-1024x522.webp" alt="" />
  <h1  className="  font-gobold" style={{marginTop: "10px", fontSize:"30px" } }>Administrador: {user.name ? user.name : 'user name'}</h1>

      <div className=" p-11">

      <button   
      type="button" 
      value='NO OPTION'
      className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium w-44 text-gray-900 focus:outline-none bg-keppel rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 font-gobold" style={{backgroundColor:"#C0C5C8"}}
      onClick={handleUserOption}
      >RESUMEN</button>

      <button   
      type="button" 
      value='CONTENIDO'
      className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium w-44 text-gray-900 focus:outline-none bg-keppel rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 font-gobold"style={{backgroundColor:"#C0C5C8"}}
      onClick={handleUserOption}
      >CONTENDIO</button>


      <button   
      type="button" 
      value='VER DONACIONES'
      className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium w-44 text-gray-900 focus:outline-none bg-keppel rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 font-gobold"
      onClick={handleUserOption}style={{backgroundColor:"#C0C5C8"}}
      
      > VER DONACIONES </button>

      <button   
      type="button" 
      value='VER USUARIOS'
      className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium w-44 text-gray-900 focus:outline-none bg-keppel rounded-lg border border-gray-200 hover:bg-blueGrey hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 font-gobold"
      onClick={handleUserOption}style={{backgroundColor:"#C0C5C8"}}
      > VER USUARIOS </button>
      
       <button   
      type="button" 
      value='VER COMENTARIOS'
      className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium w-44 text-gray-900 focus:outline-none bg-keppel rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 font-gobold"
      style={{backgroundColor:"#C0C5C8"}}

      
      onClick={handleUserOption} 
      
      > VER COMENTARIOS </button>

      



      </div>

    

</div>

</div>
  )

}

export default LeftInfoAdmin