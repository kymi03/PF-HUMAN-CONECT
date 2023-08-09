import React, { useState } from 'react';
import Card from '../card/Card.jsx';
import { useSelector } from 'react-redux';
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

function Settings(props) {
  const User = useSelector((state) => state.userAuth);
  const [content,      setContent]      = useState('');
  const [contentValue, setContentValue] = useState('');
  const [editContent, setEditContent] = useState( {} );

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  const [userList, setUserList] = useState([]); 
  const [selectedUserIndex, setSelectedUserIndex] = useState(null);
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
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
 
  console.log(event.target.value)
  setContent(event.target.value)

}

 const handleContentValue = (event) => {

  console.log(event.target.value)
  setContentValue(event.target.value)

}

const handleUpdateData = async (event) => {
    
console.log(User.id);
 try {
      const response = await axios.put(`/user` ,   
   {
     "id":User.id ,
     [content]:contentValue
     }   
   )

   // console.log("Respuesta del servidor:", response.data);
 
   navigate(`/adminoptions`);

 } catch (error) {
    console.log("Error al realizar la actualizacion:", error);
 }

}

// const editableDataList = Object.keys(PAD)
const editableDataList = [ 
  "name" ,
  "lastName" ,
  "email" ,
  "phone" 

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
    <div className=" bg-white mr-10">
                    <select name="sort" 
                onInput={handleContent}  
                type="select" className="w-44 mt-3 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                {options}
              </select>

              <textarea
                name="breaf"
                onChange={handleContentValue}
                className=" resize-none w-2/5 mb-5 border-gray-300 rounded-md"
                type="text"
              />

              <Button onClick={handleUpdateData} autoFocus>
                Actulizar campo
              </Button>

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

<div className="flex">
          <h2>Eliminar:</h2>
          <button
            onClick={() => handleToogle ()}
          >🗑</button>
        </div>
        
    </div>
  );
}

export default Settings;
