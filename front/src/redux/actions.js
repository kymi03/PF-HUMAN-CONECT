import { GET_ALL_PROJECTS , GET_ALL_LOCATION ,  ORDER_BY_DATE } from "./actions-types";
import axios from "axios";
export const getAllProjects = ( value , type )=>{

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
if (value && type ){  return async function  (dispatch){
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


}

export const getAllLocations = ()=>{
  return async function  (dispatch){
      try {
        const PAD = await axios.get('http://localhost:3001/projects')
        const DataPAD = PAD.data
  

        // const getUniqueLocations = (array) => {
        //   const uniqueLocations = [];
        //   const uniqueKeys = new Set();
        
        //   for (const loc of array) {
        //     const key = loc.trim().toLowerCase(); 
        //     if (!uniqueKeys.has(key)) {
        //       uniqueKeys.add(key);
        //       uniqueLocations.push(
        //         loc
        //           .toLowerCase()
        //           .split(' ')
        //           .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        //           .join(' ')
        //       );
        //     }
        //   }
        
        //   return uniqueLocations;
        // };

        const locationsProtoList = ['Todas']
        DataPAD.forEach(element => {
          if(element.location) {locationsProtoList.push(element.location); }
        });



        // const locationList = getUniqueLocations(locationsProtoList);
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


