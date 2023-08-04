import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserDropMenu from '../userDropMenu/UserDropMenu';
import DefoultUserMenu from '../userDropMenu/DefoultUserMenu';
import { useDispatch, useSelector } from 'react-redux';
import Home from '../../views/home/Home';

import CartCount from '../cartCount/CartCount';

export default function NavBarAle() {
  const dispatch = useDispatch()
  const userAuth = useSelector(state => state.userAuth)
  const [userInfo, setUserInfo ] = useState(false)
 
  // useEffect(() => {
  //   const data = window.localStorage.getItem('userInfo')
  //   // console.log('data:' , data);
  //   dispatch(setUserState(JSON.parse(data))) //<-- cambiar para demos
  // }, [])



  // useEffect(() => {
  //   const logged = window.localStorage.getItem("userInfo")
  //   // window.localStorage.setItem('LOGIN_USER', JSON.stringify(userState))
  //   setUserInfo(logged)
  // }, [userAuth])



  return (



<nav className=" bg-black border-gray-200 dark:bg-gray-900">
    <div
    className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4" 
    >

    
    
<Link to={`/home`}>
    <button 
    className="flex items-center"
    >
        <img src="https://humanconet.org/wp-content/uploads/2022/03/Turtle-Turquoise-1-1024x1022.png" 
        className="h-8 mr-3 " alt="Flowbite Logo" 
        />
        <span 
className=' text-white text-2xl'

        
        >HUMAN CONET</span>
    </button>
</Link>

    <div 
    className="hidden w-full md:block md:w-auto" id="navbar-default"
    >
           <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">


          <Link to={`/aboutUs`}> 
        <li>
          <button 
            className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page"
            >Quienes somos</button>
        </li>
          </Link>
     
   
          <Link to={`/articles`}>  
        <li>
          <button 
            className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >Articulos</button>
        </li>
          </Link>

          <Link to={`/projects`}>  
        <li>
          <button 
            className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >Proyectos</button>
        </li>
          </Link>

          <Link to={`/documentarys`}>  
        <li>
          <button 
            className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >Documentales</button>
        </li>
          </Link>

          <Link to={`/formjoin`}> 
        <li>
          <button 
            className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >Unete</button>
        </li>
          </Link>


          <Link to={`/donar`}>  
        <li>
          <button 
            className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >Donar</button>
        </li>
          </Link>

          </ul>

    </div>
    {userAuth.name ? <UserDropMenu /> : <DefoultUserMenu />}
<CartCount></CartCount>
  </div>
</nav>

  );
}