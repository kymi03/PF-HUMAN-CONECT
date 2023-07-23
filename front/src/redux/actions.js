import { GET_ALL_PROJECTS , GET_BY_INPUT } from "./actions-types";
import axios from "axios";
export const getAllProjects = ()=>{
return async function  (dispatch){
    try {
      const allProjects = await axios.get('http://localhost:3001/projects')



      return dispatch({
        type:GET_ALL_PROJECTS,
        payload: allProjects.data
      })

    } catch (error) {
      console.log(error.message);
    }
  }
}

export const getProjectsByInput = (input)=>{
  return async function  (dispatch){
      try {
        const ressultProjects = await axios.get(`http://localhost:3001/projects/${input}`)
  
  
  
        return dispatch({
          type:GET_BY_INPUT,
          payload: ressultProjects
        })
  
      } catch (error) {
        console.log(error.message);
      }
    }
  }