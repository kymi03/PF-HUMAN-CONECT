import {
  GET_ALL_PROJECTS,
  GET_ALL_LOCATION,
  ORDER_BY_DATE,
  GET_ALL_ARTICLES,
  GET_ALL_DOCUMENTARYS,
  GET_USER_OPTION,
  SET_DONATION_ITEMS,
  PROJECTS,
  DOCUMENTARYS,
  ARTICLES,
  GET_ARTICLES,
  SET_GLOBAL_PAD,
  SET_USER_STATE,
  GET_GOOGLE_USER,
  GET_USER,
  GET_AUTH,
  GET_USER_LIST,
  GET_USER_ACTIVE,
  GET_COMMENT_BY_USERID,
  GET_COMMENT_BY_REFERENCE,
  LOG_OUT_USER_AUTH,
  GET_CONTENT_BY_COMMENT_REFERENCE,
  GET_ALL_COMMENT
  
} from "./actions-types";

const initialState = {
  allProjects: [],
  allProjects2: [],

  allArticles: [],
  allArticles2: [],

  allDocumentarys: [],
  allDocumentarys2: [],

  allLocations: [],

  userAuth: [],
  userList: [],

  userState: false,
  userOption: "NO OPTION",
  ItemsDonation: [],

  userActive: false,
  userComment: [],
  allComents: [],
  PADComment: [],

  PADandREFERENCE: []
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
    case GET_ALL_DOCUMENTARYS:
      return {
        ...state,
        allDocumentarys: action.payload,
        allDocumentarys2: action.payload,
      };

    case GET_ALL_LOCATION:
      return {
        ...state,
        allLocations: action.payload,
      };

    case GET_GOOGLE_USER:
      return {
        ...state,
        userAuth: action.payload,
      };

    case SET_USER_STATE:
      return {
        ...state,
        userState: action.payload,
      };
    case GET_USER_OPTION:
      return {
        ...state,
        userOption: action.payload,
      };
    case LOG_OUT_USER_AUTH:
      return{
        userAuth:[]
      }

    case ORDER_BY_DATE:
      const sortByDateAsc = (data) => {
        // Filter out objects without a valid "date" property
        const validData = data.filter(
          (item) => item.date && typeof item.date === "string"
        );

        // Sort the valid data based on the "date" property in ascending order
        validData.sort((a, b) => new Date(a.date) - new Date(b.date));

        return validData;
      };

      const sortByDateDes = (data) => {
        // Filter out objects without a valid "date" property
        const validData = data.filter(
          (item) => item.date && typeof item.date === "string"
        );

        // Sort the valid data based on the "date" property in ascending order
        validData.sort((a, b) => new Date(b.date) - new Date(a.date));

        return validData;
      };

      if (action.payload.PAD === PROJECTS) {
        let orderedProjects = [...state.allProjects];
        if (action.payload.order === "dateAsc") {
          orderedProjects = sortByDateAsc(orderedProjects);
        } else if (action.payload.order === "dateDes") {
          orderedProjects = sortByDateDes(orderedProjects);
        } else if (action.payload.order === "dateAll") {
          orderedProjects = state.allProjects2;
        }
        return {
          ...state,
          // order: action.payload,
          allProjects: orderedProjects,
          // filtered: orderedDogs,
        };
      }
      if (action.payload.PAD === ARTICLES) {
        let orderedArticles = [...state.allArticles];
        if (action.payload.order === "dateAsc") {
          orderedArticles = sortByDateAsc(orderedArticles);
        } else if (action.payload.order === "dateDes") {
          orderedArticles = sortByDateDes(orderedArticles);
        } else if (action.payload.order === "dateAll") {
          orderedArticles = state.allArticles;
        }
        return {
          ...state,
          // order: action.payload,
          allArticles: orderedArticles,
          // filtered: orderedDogs,
        };
      }
      if (action.payload.PAD === DOCUMENTARYS) {
        console.log("i");
      }

      return {
        ...state,
        allLocations: action.payload,
      };

    case GET_USER_LIST:
      return {
        ...state,
        userList: action.payload,
      };
    case GET_AUTH:
      return {
        ...state,
        userAuth: action.payload,
      };

    case GET_USER:
      return {
        ...state,
        userAuth: action.payload,
      };

    case GET_USER_ACTIVE:
      return {
        ...state,
        userActive: action.payload,
      };
    case GET_COMMENT_BY_USERID:
      return {
        ...state,
        userComment: action.payload,
      };
    case GET_ALL_COMMENT:
      return {
        ...state,
        allComents: action.payload,
      };

    case GET_COMMENT_BY_REFERENCE:
      return {
        ...state,
        PADComment: action.payload,
      };

    case GET_CONTENT_BY_COMMENT_REFERENCE:
      return {
        ...state,
        PADandREFERENCE: action.payload,
      };



    case SET_DONATION_ITEMS:
      function sharedComponent(array1, array2) {
        // Utilizar un Set para encontrar elementos únicos
        const setArray1 = new Set(array1);
        const setArray2 = new Set(array2);

        // Verificar si hay elementos compartidos
        for (const element of setArray1) {
          if (setArray2.has(element)) {
            return true;
          }
        }

        // Si no se encontraron elementos compartidos, devolver false
        return false;
      }

      let exist = sharedComponent(
        [...state.ItemsDonation],
        [...action.payload]
      );
      let items = [...state.ItemsDonation];
      if (exist === false)
        items = [...new Set([...state.ItemsDonation, ...action.payload])];
      if (exist === true) {
        items = [...state.ItemsDonation].filter(
          (elemento) => ![...action.payload].includes(elemento)
        );
      }

      return {
        ...state,
        ItemsDonation: items,
      };

    default:
      return state;
  }
};

export default reducer;
