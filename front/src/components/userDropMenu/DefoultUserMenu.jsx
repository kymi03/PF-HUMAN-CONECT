import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserState } from '../../redux/actions';

const DefoultUserMenu = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logIn = () => {
    dispatch(navigate("/formlogin"))    
    dispatch(setUserState(true))
  };

  return (
    < div  >
    <div className=" flex items-center justify-self-center" >
        
      <button onClick={logIn} type="select" 
      
      className=" h-10 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" >
       INGRESAR
      </button>
      
      <img
          src="https://humanconet.org/wp-content/uploads/2022/05/Tigre-1024x522.webp"
          alt="Dropdown Menu"
          className="w-16 h-16 rounded-full object-cover bg-white"
        />
    </div>



  </div>
  );
};

export default DefoultUserMenu;
