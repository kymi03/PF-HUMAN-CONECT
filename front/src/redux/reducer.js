import {
    GET_ALL_PROJECTS,
  } from "./actions-types";
  
  const initialState = {
    allProjects: []
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_PROJECTS:
        return {
          ...state,
          allProjects: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  