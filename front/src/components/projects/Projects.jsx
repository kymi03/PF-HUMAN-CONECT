/*
===============
JavaScripFile+x: Projects.jsx
Objetivo:  renderizar cards que contiene card 
Autor: AlejoC137
Creation: 20 de julio 2023
===============
*/
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Footer from '../footer/Footer.jsx';
import Cards from '../cards/Cards.jsx';
import LeftInfo from '../leftInfo/LeftInfo.jsx';
import NavBarAle from '../NavBar/NavBarAle.jsx';
import { getSearchPADByQuery,  } from '../../redux/actions.js';
import {
  // GET_ALL_PROJECTS , GET_ALL_LOCATION ,  ORDER_BY_DATE,
  PROJECTS , DOCUMENTARYS , ARTICLES
  } from "../../redux/actions-types";
function Projects() {
  const dispatch = useDispatch();

  const currentPAD = useSelector(state => state.allProjects)

  return (  
<div className=' bg-grey' >
  <NavBarAle/>
  <p className="ml-11 mt-2 mb-5 py-4 text-justify font-gobold text-5xl font-semibold text-gray-900 dark:text-white">PROYECTOS</p>
  
  <div className="flex">

    <div className=' w-1/5 h-3/5  ml-11'>
      <LeftInfo PAD = {PROJECTS}/>
    </div>

    <div className='h-3/5 w-4/5'>
      <Cards 
      currentPAD={currentPAD} 
      PAD =  {PROJECTS}
        />
    </div>

  </div>
  
    <Footer />
  </div>
  )
}

export default Projects;