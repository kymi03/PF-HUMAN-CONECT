import { 
  GET_ALL_PROJECTS,
  GET_ALL_ARTICLES,
  GET_ALL_DOCUMENTARYS,

  GET_ALL_LOCATION,
  GET_ARTICLES,
  ORDER_BY_DATE,
  GET_BY_INPUT,
  POST_NEW_USER,
  POST_NEW_GOOGLE_USER,
  SET_GLOBAL_PAD,
  GET_GOOGLE_USER,
  GET_USER,
 
  SET_USER_STATE,
  GET_USER_OPTION,
  GET_ADMIN_OPTION,
  SET_DONATION_ITEMS,
  GET_AUTH,
  GET_USER_LIST



} from "./actions-types";

import {
  PROJECTS , DOCUMENTARYS , ARTICLES
  } from "../redux/actions-types";


import axios from "axios";
import Swal from "sweetalert2";


export function getGoogleAuth( {uemail,token} ) {
  return async function (dispatch) {
    try {
      axios.get(`/user?uemail=${uemail}&token=${token}`)
      .then((info)=>{
        // window.localStorage.setItem("userInfo", JSON.stringify(info.data))
        console.log('getGoogleAuth: ' , info.data);

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

export function getEmailAuth({ email, password }) {
  return async function (dispatch) {
    try {
      const info = await axios.get(`/user?email=${email}&password=${password}`);
      console.log('getEmailAuth: ' , info.data);
      return dispatch({
        type: GET_USER,
        payload: info.data,
      });
    } catch (error) {
      console.log(error.response);
      Swal.fire(error.response.data.error);

    }
  };
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


export const getAllLocations = (PAD)=>{
  return async function  (dispatch){
      try {
        let PADLocations;

        switch (PAD) {
          case PROJECTS:
            PADLocations = await axios.get('/projects');
            break;
          case ARTICLES:
            PADLocations = await axios.get('/articles');
            break;
          case DOCUMENTARYS:
            PADLocations = await axios.get('/documentaries');
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
                  // .toLowerCase()
                  .split(' ')
                  // .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
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
          // payload: locationsProtoList
          payload: locationList
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
      console.log(payload);
      axios.post('/user', payload )
      .then((data)=>{
        Swal.fire("Usuario creado exitosamente")
        return dispatch({
          type: POST_NEW_USER,
          payload:data
        })
      })
      .catch(error=>{        
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
      axios.post('user', payload )
      .then((data)=>{
        console.log(data);
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
      axios.post(`/${PADtype}`, payload )
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


 switch (PAD) {
  case PROJECTS:

  return async function  (dispatch){
    try {
      const getAllProjects = await axios.get(`/projects?${query}`)
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
      const getAllArticles = await axios.get(`/articles?${query}`)
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
      const getAllDocumentarys = await axios.get(`/documentaries?${query}`)
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


export const getUserOption = (option)=>{
  return async function  (dispatch){
      try {
   console.log(option);
        return dispatch({
          type:GET_USER_OPTION,
          payload: option
        })
  
      } catch (error) {
        console.log(error.message);
      }
    }
  }

export const setDonationItems = (item)=>{
  return async function  (dispatch){
      try {
  //  console.log(item);
        return dispatch({
          type:SET_DONATION_ITEMS,
          payload: item
        })
  
      } catch (error) {
        console.log(error.message);
      }
    }
  }
  
export const getAdminOption = (option)=>{
  return async function  (dispatch){
      try {
   console.log(option);
        return dispatch({
          type:GET_ADMIN_OPTION,
          payload: option
        })
  
      } catch (error) {
        console.log(error.message);
      }
    }
  }
export const getUserList = ()=>{
  return async function  (dispatch){
      try {
        const response = await axios.get("http://localhost:3001/user")
        console.log(response);
        return dispatch({
          type:GET_USER_LIST,
          payload: response
        })
  
      } catch (error) {
        console.log(error.message);
      }
    }
  }

export const getAuth = (auth)=>{
  return async function  (dispatch){
      try {
  //  console.log(auth);
        return dispatch({
          type:GET_AUTH,
          payload: auth
        })
  
      } catch (error) {
        console.log(error.message);
      }
    }
  }
// export const deleteContent = (auth)=>{
//   return async function  (dispatch){
//       try {
//   //  console.log(auth);
//         return dispatch({
//           type:GET_AUTH,
//           payload: auth
//         })
  
//       } catch (error) {
//         console.log(error.message);
//       }
//     }
//   }