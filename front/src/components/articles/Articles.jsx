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
import NavBarAle from '../NavBar/NavBar.ale.jsx';
import { getSearchPADByQuery } from '../../redux/actions.js';
import {
  // GET_ALL_PROJECTS , GET_ALL_LOCATION ,  ORDER_BY_DATE,
  PROJECTS , DOCUMENTARYS , ARTICLES
  } from "../../redux/actions-types";
function Articles() {

  

  const dispatch = useDispatch();
  const currentPAD = useSelector(state => state.allArticles)


  useEffect(() => {
    dispatch(getSearchPADByQuery('' , '' , ARTICLES ));


  }, []);


  return (  
    <div >
      <NavBarAle/>
      <p className="ml-11 mb-5 text-justify text-5xl font-semibold text-gray-900 dark:text-white">ARTICULOS </p>
      
      <div className="flex">
    
        <div className=' w-1/5 h-3/5  ml-11'>
        <LeftInfo PAD = {ARTICLES}/>
        </div>
    
        <div className='h-3/5 w-4/5  border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700'>
        <Cards 
      currentPAD={currentPAD} 
      PAD =  {ARTICLES}
        />
        </div>
    
      </div>
      
        <Footer />
      </div>
      )
}

export default Articles;


