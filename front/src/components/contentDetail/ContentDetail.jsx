// import styles from "./Detail.module.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBarAle from "../NavBar/NavBarAle";
import FooterMoreInfo from "../footer/FooterMoreInfo";
import { PROJECTS, ARTICLES, DOCUMENTARYS } from "../../redux/actions-types";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Switch,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Snackbar,
} from "@mui/material"
import { TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";

function ContentDetail() {

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  const [userList, setUserList] = useState([]); 
  const [selectedUserIndex, setSelectedUserIndex] = useState(null);
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  
  const [sourcePAD,    setSourcePAD]    = useState('');
  const [content,      setContent]      = useState('');
  const [contentValue, setContentValue] = useState('');
  const [editContent, setEditContent] = useState( {} );
  
  const [PAD, setPAD] = useState([]);
  const { id } = useParams();

  function splitString(inputString) {
    const [key, value] = inputString.split("=");
    return { key, value };
  }

  const { key, value } = splitString(id);
  let source = "";
  switch (key) {
    case PROJECTS:
      source = "projects";
      break;
    case ARTICLES:
      source = "articles";
      break;
    case DOCUMENTARYS:
      source = "documentaries";
      break;
    default:
      break;
  }

  useEffect(() => {
    if (source !== "") {
      axios
        .get(`/${source}?id=${value}`)
        .then(({ data }) => {
          setPAD(data);
        })
        .catch((error) => {
          console.error(error);
          window.alert(`No hay ${source} con ese ID`);
        });
    }
  }, [id, source, value]);

  useEffect(() => {
    setEditContent(
      {
        "id": value ,
        [content]: contentValue
        }
    )
    
 


  }, [ contentValue , content ]);


  const handleToogle = (index, email) => {
    setConfirmationOpen(true); 
  }; 
  
  const handleConfirmationClose = () => {
    setConfirmationOpen(false);
  };








  const handleConfirmationConfirm = async () => {
    setConfirmationOpen(false);
    // 
    try {

       // Eliminación del usuario en la base de datos
    await axios.delete(`http://localhost:3001/${source}?id=${value}`);
    showSnackbar("Contenido eliminado de la base de datos")

    navigate(`/${source}`);


    } catch (error) {
      console.error("Error deleting content:", error);
        showSnackbar("Error deleting content");
    }
   
  };

  const showSnackbar = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };
  
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleUpdateData = async (event) => {
    
    try {
      
      const response = await axios.put(`http://localhost:3001/${source}` , editContent)

      console.log("Respuesta del servidor:", response.data);
    
      navigate(`/${padType}`);


    } catch (error) {
      
      console.log("Error al realizar la actualizacion:", error);

    }



  }


//  " sourcePAD
// content
// contentValue "

  const handleContent = (event) => {
 
    console.log(event.target.value)
    setContent(event.target.value)

  }


  const handleContentValue = (event) => {

    console.log(event.target.value)
    setContentValue(event.target.value)

  }

  // const editableDataList = Object.keys(PAD)
  const editableDataList = [ 
    "name" ,
    "title" ,
    "body" ,
    "body2" ,
    "body3" ,
    "breaf" ,
    "location" ,
    "active" ,
  ]

  const generateOptions = (options) => {
    return options.map((option , index ) => (
      <option key={index} value={option}>
        {option}
      </option>
    ));
  };

  const options = generateOptions( editableDataList )


  return (
    <div>
      <NavBarAle></NavBarAle>
      <div 
      className=" justify-start"
      >
        <h2>ID:</h2>
        <h3>{PAD._id}</h3>

        <h3>Autor:{PAD.author}</h3>
        <h3>Nombre del contenido:{PAD.name}</h3>
        <h3>Titulo: {PAD.title}</h3>

        <h3>Fecha de creación: {PAD.date}</h3>
        <h3>Localización: {PAD.location}</h3>

        <h2>Media:</h2>
        <h3>Cantidad de Imagenes: {PAD.media?.images.length}</h3>
        <h3>Cantidad de Videos: {PAD.media?.videos.length}</h3>

        <h2>Configurar:</h2>
        <h3>editar campo: </h3>
        <div className="flex">

    <select name="sort" 
    onInput={handleContent}  
    type="select" className="w-44 mt-3 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        {options}
    </select>

 

    <textarea
            name="breaf"
            // value={padData.breaf}
            onChange={handleContentValue}
            className=" resize-none w-2/5 mb-5 border-gray-300 rounded-md"
            type="text"
          />
        <Button onClick={handleUpdateData} autoFocus>
          Actulizar campo
        </Button>
      </div>
        <h3>Estado: {PAD.active === true ?  "activo" : false }</h3>
        
        <Switch
            checked={PAD.active}
            onChange={() => handleToogle ()}
            color="primary"
          />


          <h2>Eliminar:</h2>
          <button
                      onClick={() => handleToogle ()}

          >🗑</button>

    <Dialog open={confirmationOpen} onClose={handleConfirmationClose}>
      <DialogTitle>Confirmación</DialogTitle>
      <DialogContent>
        ¿Seguro que quieres eliminar el usuario?
      </DialogContent>
      <DialogActions>
        <Button onClick={handleConfirmationClose}>No</Button>
        <Button onClick={handleConfirmationConfirm} autoFocus>
          Si, Borrar
        </Button>
      </DialogActions>
    </Dialog>



    <Snackbar
      open={snackbarOpen}
      autoHideDuration={3000}
      onClose={handleSnackbarClose}
      message={snackbarMessage}
    />

   
      </div>
      <FooterMoreInfo />
    </div>
  );
}

export default ContentDetail;
