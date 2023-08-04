import React, { useEffect, useState } from 'react';
import Card from '../card/Card.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchPADByQuery } from '../../redux/actions.js';
import {
  PROJECTS , DOCUMENTARYS , ARTICLES
  } from "../../redux/actions-types.js";


function AdminSummary(props) {

  const dispatch = useDispatch()

 
  const allProjects =     useSelector(state =>     state.allProjects)
  const allArticles =     useSelector(state =>     state.allArticles)
  const allDocumentarys = useSelector(state => state.allDocumentarys)

  useEffect( () => {
dispatch(getSearchPADByQuery('' , '' , PROJECTS    ))
dispatch(getSearchPADByQuery('' , '' , DOCUMENTARYS))
dispatch(getSearchPADByQuery('' , '' , ARTICLES    ))

  } , [ 
        // allProjects     , 
        // allArticles     ,
        // allDocumentarys ,
      ])



  console.log(allProjects.length    );
  console.log(allArticles.length    );
  console.log(allDocumentarys.length);

  return (
    <div className=" bg-white mr-10">
      <h1>Total de proyectos: {allProjects.length}</h1>
      <h1>Total de articulos: {allArticles.length}</h1>
      <h1>Total de documentarys: {allDocumentarys.length}</h1>

    </div>
  );
}

export default AdminSummary;
