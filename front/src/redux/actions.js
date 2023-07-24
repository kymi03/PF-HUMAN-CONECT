import { 
  GET_ALL_PROJECTS,
  GET_BY_INPUT,
  POST_NEW_USER
} from "./actions-types";
import axios from "axios";
export const getAllProjects = ()=>{
return async function  (dispatch){
    try {
      const allProjects = await axios.get('http://localhost:3001/get/projects')
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
        const ressultProjects = await axios.get(`http://localhost:3001/get/projects/${input}`)
        return dispatch({
          type:GET_BY_INPUT,
          payload: ressultProjects
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

export function postNewArticle (payload) {
  return function(dispatch){
    try {
      axios.post('http://localhost:3001/articles', payload )
      .then((data)=>{
        return dispatch({
          type: POST_NEW_ARTICLE,
          payload:data
        })
      })
    } catch (error) {
      console.log(error.message);
    }
  }
}