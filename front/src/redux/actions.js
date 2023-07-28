import { 
  GET_ALL_PROJECTS,
  GET_ALL_LOCATION,
  ORDER_BY_DATE,
  GET_BY_INPUT,
  GET_ARTICLES,
  GET_ALL_ARTICLES,
  POST_NEW_USER,
  POST_NEW_GOOGLE_USER,
  SET_GLOBAL_PAD,
  GET_GOOGLE_USER,
  GET_USER

} from "./actions-types";

import {
  // GET_ALL_PROJECTS , GET_ALL_LOCATION ,  ORDER_BY_DATE,
  PROJECTS , DOCUMENTARYS , ARTICLES
  } from "../redux/actions-types";


import axios from "axios";
import Swal from "sweetalert2";

export function getGoogleAuth( {uemail,token} ) {
  return async function (dispatch) {
    try {
      axios.get(`http://localhost:3001/user?uemail=${uemail}&token=${token}`)
      .then((info)=>{
        return dispatch({
          type: GET_GOOGLE_USER,
          payload: info.data,
        })
      })
      .catch(error=>{
        console.log(error.response)
        Swal.fire(error.response.data.error)
      })        
    } catch (error) {
      console.log(error);
    }
  }
}

export function getEmailAuth( {email,password} ) {
  return async function (dispatch) {
    try {
      axios.get(`http://localhost:3001/user?email=${email}&password=${password}`)
      .then((info)=>{
        return dispatch({
          type: GET_USER,
          payload: info.data,
        })        
      })
      .catch(error=>{
        console.log(error.response)
        Swal.fire(error.response.data.error)
      })
    } catch (error) {
      console.log(error);
    }
  }
}

export const setPADAction = (PAD) => {
  return (dispatch) => {
    try {
      dispatch({
        type: SET_GLOBAL_PAD,
        payload: PAD,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export const getAllProjects = ( value , type , location)=>{

if ((!value && !type) || (value==="Todas")){  return async function  (dispatch){
    try {
      const allProjects = await axios.get('http://localhost:3001/projects')

      return dispatch({
        type:GET_ALL_PROJECTS,
        payload: allProjects.data
      })
    } catch (error) {
      console.log(error.message);
    }
  }}
if (value && type && location==='Todas'){  return async function  (dispatch){
    try {
      const allProjects = await axios.get(`http://localhost:3001/projects?${type}=${value}`)



      return dispatch({
        type:GET_ALL_PROJECTS,
        payload: allProjects.data
      })

    } catch (error) {
      console.log(error.message);
    }
  }}
if (value && type && location !=='Todas'){  return async function  (dispatch){
    try {
      const allProjects = await axios.get(`http://localhost:3001/projects?${type}=${value}&location=${location}`)


 


      return dispatch({
        type:GET_ALL_PROJECTS,
        payload: allProjects.data
      })

    } catch (error) {
      console.log(error.message);
    }
  }}


}

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
        Swal.fire("Usuario creado exitosamente")
        return dispatch({
          type: POST_NEW_USER,
          payload:data
        })
      })
      .catch(error=>{
        console.log(error.response)
        Swal.fire(error.response.data.error)
      })
    } catch (error) {
      console.log(error.message);
    }
  }
}

export function postNewGoogleUser (payload) {
  return function(dispatch){
    try {
      console.log(payload);
      axios.post('http://localhost:3001/user', payload )
      .then((data)=>{
        Swal.fire("Usuario creado exitosamente")
        return dispatch({
          type: POST_NEW_GOOGLE_USER,
          payload:data
        })
      })
      .catch(error=>{
        console.log(error.response)
        Swal.fire(error.response.data.error)
      })
    } catch (error) {
      console.log(error);
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

// export function getArticles(){
//   return async function(dispatch){
//     try {
//       var response = await axios.get('http://localhost:3001/articles')
//       return dispatch({
//         type: GET_ARTICLES,
//         payload: response.data
//       })
//     } catch (error) {
//       console.log(error.message);
//     }
//   }
// }

export const getAllArticles = ( nam , loc )=>{

  // console.log(  nam , loc );


  // if ( nam === '' && loc === 'Todas' ){  return async function  (dispatch){
    
  if ( !nam && !loc  ){  return async function  (dispatch){


      try {
        const allArticles = await axios.get('http://localhost:3001/Articles')
console.log(allArticles.data);

        return dispatch({
          type:GET_ALL_ARTICLES,
          payload: allArticles.data
        })
      } catch (error) {
        console.log(error.message);
      }
    }}
  if ( nam !== '' && loc ==='Todas'){  return async function  (dispatch){

    // console.log(`http://localhost:3001/Articles?name=${nam}`)

    console.log(nam);
      try {
        const allArticles = await axios.get(`http://localhost:3001/Articles?name=${nam}`)
console.log(allArticles.data);
  
  
        return dispatch({
          type:GET_ALL_ARTICLES,
          payload: allArticles.data
        })
  
      } catch (error) {
        console.log(error.message);
      }
    }}


  if ( nam === '' && loc !=='Todas'){  return async function  (dispatch){
// console.log(`http://localhost:3001/Articles?location=${loc}`);

      try {
        const allArticles = await axios.get(`http://localhost:3001/Articles?location=${loc}`)
console.log(allArticles.data);
 
  
  
        return dispatch({
          type:GET_ALL_ARTICLES,
          payload: allArticles.data
        })
  
      } catch (error) {
        console.log(error.message);
      }
    }}


  if ( nam !== '' && loc !=='Todas'){  return async function  (dispatch){
console.log(`http://localhost:3001/Articles?name=${nam}&location=${loc}` , ' action ')

      try {
        const allArticles = await axios.get(`http://localhost:3001/Articles?name=${nam}&location=${loc}`)
// console.log(allArticles.data);
  
  
        return dispatch({
          type:GET_ALL_ARTICLES,
          payload: allArticles.data
        })
  
      } catch (error) {
        console.log(error.message);
      }
    }}

  

  }