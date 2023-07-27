import { 
  GET_ALL_PROJECTS,
  GET_ALL_ARTICLES,
  GET_ALL_DOCUMENTARYS,

  GET_ALL_LOCATION,
  GET_ARTICLES,
  ORDER_BY_DATE,
  GET_BY_INPUT,
  POST_NEW_USER,
  SET_GLOBAL_PAD,



} from "./actions-types";

import {
  // GET_ALL_PROJECTS , GET_ALL_LOCATION ,  ORDER_BY_DATE,
  PROJECTS , DOCUMENTARYS , ARTICLES
  } from "../redux/actions-types";


import axios from "axios";




export const getAllLocations = (PAD)=>{
  return async function  (dispatch){
      try {
        let PADLocations;

        switch (PAD) {
          case PROJECTS:
            PADLocations = await axios.get('http://localhost:3001/projects');
            break;
          case ARTICLES:
            PADLocations = await axios.get('http://localhost:3001/articles');
            break;
          case DOCUMENTARYS:
            PADLocations = await axios.get('http://localhost:3001/documentaries');
            break;
          default:
            return; // Return early if PAD doesn't match any case
        }
  
        const DataPAD = PADLocations.data;
  
  
        
        const getUniqueLocations = (array) => {
          const uniqueLocations = [];
          const uniqueKeys = new Set();
        
          for (const loc of array) {
            const key = loc.trim().toLowerCase(); 
            if (!uniqueKeys.has(key)) {
              uniqueKeys.add(key);
              uniqueLocations.push(
                loc
                  .toLowerCase()
                  .split(' ')
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ')
              );
            }
          }
        
          return uniqueLocations;
        };


        const locationsProtoList = ['Todas']
        DataPAD.forEach(element => {
          if(element.location) {locationsProtoList.push(element.location); }
        });



        const locationList = getUniqueLocations(locationsProtoList);
        return dispatch({
          type:GET_ALL_LOCATION,
          payload: locationsProtoList
          // payload: locationList
        })
  
      } catch (error) {
        console.log(error.message);
      }
    }
  }

export const orderByDate = (order , PAD)=>{
  return async function  (dispatch){
      try {
   
        const ordenator = {"order": order , "PAD":PAD}
        // const locationList = getUniqueLocations(locationsProtoList);

        return dispatch({
          type:ORDER_BY_DATE,
          payload: ordenator
        })
  
      } catch (error) {
        console.log(error.message);
      }
    }
  }

export function postNewUser (payload) {
  return function(dispatch){
    try {
      axios.post('http://localhost:3001/user', payload )
      .then((data)=>{
        return dispatch({
          type: POST_NEW_USER,
          payload:data
        })
      })
    } catch (error) {
      console.log(error.message);
    }
  }
}

export function postNewPAD (payload , PADtype ) {
  return function(dispatch){
    try {
      axios.post(`http://localhost:3001/${PADtype}`, payload )
      .then((data)=>{
        return dispatch({//<--- no tengo muy claro para que se esta dispatch-eando al reducer , no tiene state ni case asiganos que respondan a este dispath 
          type: POST_NEW_ARTICLE, 
          payload:data
        })
      })
    } catch (error) {
      console.log(error.message);
    }
  }
}


export const getSearchPADByQuery = ( nam , loc , PAD)=>{
  let query = ''
  if (nam !== '' ) { query = query+nam }
  if (loc !== '' ) { query = query+'&'}
  if (loc !== '' ) { query = query+loc }

  // console.log(query);

 switch (PAD) {
  case PROJECTS:

  return async function  (dispatch){
    try {
      const getAllProjects = await axios.get(`http://localhost:3001/projects?${query}`)
        // console.log(getAllProjects.data);
      return dispatch({
        type:GET_ALL_PROJECTS,
        payload: getAllProjects.data
      })
  
    } catch (error) {
      console.log(error.message);
    }
  }

    // break;
  case ARTICLES:

  return async function  (dispatch){
    try {
      const getAllArticles = await axios.get(`http://localhost:3001/articles?${query}`)
        // console.log(getAllArticles.data);
      return dispatch({
        type:GET_ALL_ARTICLES,
        payload: getAllArticles.data
      })
  
    } catch (error) {
      console.log(error.message);
    }
  }


  
    // break;
  case DOCUMENTARYS:

  return async function  (dispatch){
    try {
      const getAllDocumentarys = await axios.get(`http://localhost:3001/documentaries?${query}`)
        // console.log(getAllDocumentarys.data);   
      return dispatch({
        type:GET_ALL_DOCUMENTARYS,
        payload: getAllDocumentarys.data
      })
  
    } catch (error) {
      console.log(error.message);
    }
  }

    // break;
 
  default:
    break;
 }




}







