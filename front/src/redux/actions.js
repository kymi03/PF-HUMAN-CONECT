import { GET_ALL_PROJECTS  } from "./actions-types";
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