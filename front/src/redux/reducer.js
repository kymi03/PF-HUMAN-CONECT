import {
    GET_ALL_PROJECTS,
    GET_BY_INPUT
  } from "./actions-types";
  
  const initialState = {
    allProjects: [],
    allProjectsSR: [],
    resultProjects: []
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_PROJECTS:
        return {
          ...state,
          allProjects: action.payload,
          allProjectsSR: action.payload,
        };
      case GET_BY_INPUT:
        return {
          ...state,
          allProjects: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  