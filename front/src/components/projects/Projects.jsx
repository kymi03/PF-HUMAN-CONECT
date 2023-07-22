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
import FooterMoreInfo from '../footer/FooterMoreInfo.jsx';
import Cards from '../cards/Cards.jsx';
import LeftInfo from '../leftInfo/LeftInfo.jsx';
import NavBarAle from '../NavBar/NavBar.ale.jsx';
import { getAllProjects } from '../../redux/actions.js';


function Projects() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProjects());


  }, []);
  
  const currentPAD = useSelector(state => state.allProjects)


  return (  
    <div >
<NavBarAle/>

<p class="ml-11 mb-5 text-justify text-5xl font-semibold text-gray-900 dark:text-white">PROYECTOS</p>


<div className="flex">
<div className=' w-1/5 h-3/5  ml-11'>
<LeftInfo />
</div>
<div className=' / h-3/5 w-4/5  bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700'>
<Cards currentPAD={currentPAD} />

</div>
</div>


<FooterMoreInfo />

  </div>
  )
}

export default Projects;
