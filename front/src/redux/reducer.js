import {
  GET_ALL_PROJECTS , GET_ALL_LOCATION ,  ORDER_BY_DATE, GET_ALL_ARTICLES,
  PROJECTS , DOCUMENTARYS , ARTICLES, GET_ARTICLES , SET_GLOBAL_PAD
  } from "./actions-types";
  
  const initialState = {
    allProjects: [],
    allProjects2: [],
   
    allArticles: [],
    allArticles2: [],

    allDocumentarys: [],
    allDocumentarys2: [],

    allLocations: [],

 
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_PROJECTS:
        return {
          ...state,
          allProjects: action.payload,
          allProjects2: action.payload,
        };
      case GET_ALL_ARTICLES:
        return {
          ...state,
          allArticles: action.payload,
          allArticles2: action.payload,
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

    orderedProjects = state.allProjects2

  } 
  return {
    ...state,
    // order: action.payload,
    allProjects: orderedProjects,
    // filtered: orderedDogs,
  };

}
if(action.payload.PAD === ARTICLES ){  
  
  let orderedArticles = [...state.allArticles];
  if (action.payload.order === "dateAsc") {

    orderedArticles = sortByDateAsc(orderedArticles)

  } else if (action.payload.order === "dateDes") {

    orderedArticles = sortByDateDes(orderedArticles)


  } else if (action.payload.order === "dateAll") {

    orderedArticles = state.allArticles

  } 
  return {
    ...state,
    // order: action.payload,
    allArticles: orderedArticles,
    // filtered: orderedDogs,
  };


}
if(action.payload.PAD === DOCUMENTARYS ){  console.log('i');
}
  



        


        return {
          ...state,
          allLocations: action.payload,
        };
  















      default:
        return state;
    }
  };
  
  export default reducer;
  