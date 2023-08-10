import React, { useState } from 'react';
import Card from '../card/Card.jsx';
import { useDispatch, useSelector } from 'react-redux';
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
import { Home, Search } from "@mui/icons-material";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getAuth } from '../../redux/actions.js';

function Settings(props) {
  const User = useSelector((state) => state.userAuth);
  const [content,      setContent]      = useState('');
  const [contentValue, setContentValue] = useState('');

  const dispatch = useDispatch()

  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [isActive, setIsActive] = useState( true );
  const [comments, setComments] = useState( [] );
  const navigate = useNavigate()
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
    await axios.delete(`/${source}?id=${value}`);
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


 const handleContent = (event) => {
 


  switch (event.target.value) {
    case "Nombre":
      setContent("name");

      break;
    case "Apellido":
      setContent("lastName");

      break;
    case "Correo Electronico":
      setContent("email");

      break;
    case "Numero Celular":
      setContent("phone");

      break;
  
    default:
      break;
  }

}

 const handleContentValue = (event) => {

  console.log(event.target.value)
  setContentValue(event.target.value)

}

const handleUpdateData = async (event) => {

  User[content]=contentValue

  dispatch(getAuth( User )) 
  window.localStorage.setItem("userInfo", JSON.stringify(User));
  

 try {
      const response = await axios.put(`/user` ,   
   {
     id:User.id ,
     email:User.email ,
     [content]:contentValue
     }   
   )

   // console.log("Respuesta del servidor:", response.data);
 
   navigate(`/home`);


 } catch (error) {
    console.log("Error al realizar la actualizacion:", error);
 }

}

// const editableDataList = Object.keys(PAD)
const editableDataList = [ 
  "Selecciona..." ,
  "Nombre" ,
  "Apellido" ,
  "Correo Electronico" ,
  "Numero Celular" 

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
    <div className="flex flex-col p-5  justify-start  bg-white w-96 h-96
    border
    rounded-2xl
    border-grey
    ">
                    
                    <h2
      className="py-2.5 px-5  mb-4 mr-2.5 ml-2.5 mt-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200  focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      > SELECCTIONA Y EDITA TU INFOMACIÓN :</h2>

                    <select name="sort" 
                onInput={handleContent}  
                type="select" 
                className="w-12/12 mt-3 mb-1 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                {options}
              </select>

              <textarea
                name="breaf"
                onChange={handleContentValue}
                className=" resize-none w-12/12 h-40 mb-2 border-gray-300 rounded-md"
                type="text"
                placeholder='Escribe la nueva información...'
              />
          <button
            onClick={handleUpdateData}
            className=" bg-vividGreen mb-2 text-white w-12/12 font-gilroy font-medium text-lg py-1 px-2 rounded-lg hover:bg-green-600"
          >
            Actualizar campo
          </button>

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

<div 
className="flex justify-center bg-amber-400 mb-2 text-white w-12/12 font-gilroy font-medium text-lg py-1 px-2 rounded-lg 
pointer hover:bg-amber-500"
onClick={() => handleToogle ()}>
          
          <h2 className='pointer'>Eliminar:</h2>
          <button
          
          
            onClick={() => handleToogle ()}
          >🗑</button>
        </div>
        
    </div>
  );
}

export default Settings;
