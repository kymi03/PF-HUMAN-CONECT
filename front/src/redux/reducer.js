import {
  GET_ALL_PROJECTS , GET_ALL_LOCATION ,  ORDER_BY_DATE,
  PROJECTS , DOCUMENTARYS , ARTICLES
  } from "./actions-types";
  
  const initialState = {
    allProjects: [],
    allProjectsSR: [],
    allLocations: []
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_PROJECTS:
        return {
          ...state,
          allProjects: action.payload,
          allProjectsSR: action.payload,
        };
      case GET_ALL_LOCATION:
        return {
          ...state,
          allLocations: action.payload,
        };

      case ORDER_BY_DATE:

      const sortByDateAsc = (data) => {
        // Filter out objects without a valid "date" property
        const validData = data.filter((item) => item.date && typeof item.date === "string");
      
        // Sort the valid data based on the "date" property in ascending order
        validData.sort((a, b) => new Date(a.date) - new Date(b.date));
      
        return validData;
      };
      const sortByDateDes = (data) => {
        // Filter out objects without a valid "date" property
        const validData = data.filter((item) => item.date && typeof item.date === "string");
      
        // Sort the valid data based on the "date" property in ascending order
        validData.sort((a, b) => new Date(b.date) - new Date(a.date));
      
        return validData;
      };

if(action.payload.PAD === PROJECTS ){ 



  let orderedProjects = [...state.allProjects];
  if (action.payload.order === "dateAsc") {

    orderedProjects = sortByDateAsc(orderedProjects)

  } else if (action.payload.order === "dateDes") {

    orderedProjects = sortByDateDes(orderedProjects)


  } else if (action.payload.order === "dateAll") {

    orderedProjects = state.allProjectsSR


  } 
  return {
    ...state,
    // order: action.payload,
    allProjects: orderedProjects,
    // filtered: orderedDogs,
  };

}
if(action.payload.PAD === ARTICLES ){  console.log('i');
}
if(action.payload.PAD === DOCUMENTARYS ){  console.log('i');
}
  
  // console.log('i');
  // let orderedProjects  = [...state.alldogs];


        


        return {
          ...state,
          allLocations: action.payload,
        };
  















      default:
        return state;
    }
  };
  
  export default reducer;
  