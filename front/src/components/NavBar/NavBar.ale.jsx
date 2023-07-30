
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserDropMenu from '../userDropMenu/UserDropMenu';
import DefoultUserMenu from '../userDropMenu/DefoultUserMenu';
import { useDispatch, useSelector } from 'react-redux';
import { setUserState } from '../../redux/actions';


export default function NavBarAle() {
 const dispath = useDispatch()
  const userState = useSelector(state => state.userState)

  useEffect( () => {
      const data = window.localStorage.getItem('LOGIN_USER')
      // console.log('data:' , data);
      // dispath(setUserState(JSON.parse(data))) //<-- cambiar para demos
  } , [])



  useEffect( () => {

      window.localStorage.setItem('LOGIN_USER' , JSON.stringify(userState))


  } , [userState])



  return (



<nav className=" bg-black border-gray-200 dark:bg-gray-900">
    <div
    className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4" 
    >

    
    
<Link to={`/home`}>
    <a 
    className="flex items-center"
    >
        <img src="https://humanconet.org/wp-content/uploads/2022/03/Turtle-Turquoise-1-1024x1022.png" 
        className="h-8 mr-3" alt="Flowbite Logo" 
        />
        <span 

        className="self-center text-2xl font-semibold whitespace-nowrap text-white"

        
        >HUMAN CONET</span>
    </a>
</Link>

    <div 
    className="hidden w-full md:block md:w-auto" id="navbar-default"
    >
           <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">


          <Link to={`/aboutUs`}> 
        <li>
          <a 
            className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page"
            >Quienes somos</a>
        </li>
          </Link>
     
   
          <Link to={`/articles`}>  
        <li>
          <a 
            className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >Articles</a>
        </li>
          </Link>

          <Link to={`/projects`}>  
        <li>
          <a 
            className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >Proyectos</a>
        </li>
          </Link>

          <Link to={`/documentarys`}>  
        <li>
          <a 
            className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >Documentales</a>
        </li>
          </Link>

          <Link to={`/formjoin`}> 
        <li>
          <a 
            className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >Unete</a>
        </li>
          </Link>


          <Link to={`/donar`}>  
        <li>
          <a 
            className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >Donar</a>
        </li>
          </Link>

          </ul>

    </div>
{ userState === true ? <UserDropMenu></UserDropMenu> : <DefoultUserMenu></DefoultUserMenu> }

  </div>
</nav>

  );
}