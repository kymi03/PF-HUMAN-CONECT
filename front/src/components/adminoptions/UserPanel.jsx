import React from 'react';
import  {useState, useEffect}  from 'react';
import axios from 'axios';
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
import { Search, Troubleshoot } from "@mui/icons-material";





function UserPanel(props) {
  
const [currentPage, setCurrentPage] = useState(1);
const usersPerPage = 5;
const [userList, setUserList] = useState([]); 
const [confirmationOpen, setConfirmationOpen] = useState(false);
const [selectedUserIndex, setSelectedUserIndex] = useState(null);
const [currentUserEmail, setCurrentUserEmail] = useState("");
const [snackbarMessage, setSnackbarMessage] = useState("");
const [searchTerm, setSearchTerm] = useState("");
const [snackbarOpen, setSnackbarOpen] = useState(false);
const [isActive, setIsActive] = useState (true)
// const [actionType, setActionType] = useState ("")

useEffect(() => {
  const usersData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/user/all");
      const users = response.data;
      setUserList(users); // Actualizar el estado userList con los datos obtenidos
    } catch (error) {
      // Manejo de errores (opcional)
      console.error('Error al obtener los usuarios:', error);
    }
  };

  usersData();
}, []);

const handleToogle = (index, email, isActive) => {
  setSelectedUserIndex(index);
  setCurrentUserEmail(email)
  setConfirmationOpen(true); 
  setIsActive (isActive)
  // setActionType(isActive ? "block" : "delete")
}; 

const handleConfirmationClose = () => {
  setConfirmationOpen(false);
};


const handleConfirmationConfirm = async () => {
  setConfirmationOpen(false);
  const emailToDelete = currentUserEmail;

  try {
     // Eliminación del usuario en la base de datos
  await axios.delete(`http://localhost:3001/user/?email=${emailToDelete}`);
  showSnackbar("Usuario eliminado de la base de datos")
  // Actualización de la lista de usuarios
  const updatedUserList = userList.filter((user) => user.email !== emailToDelete);
  setUserList(updatedUserList);
  } catch (error) {
    console.error("Error deleting user:", error);
      showSnackbar("Error deleting user");
  }
 
};

const handleConfirmationToBlockUser = async (isActive) => {
  setConfirmationOpen(false);
  const emailToBlock = currentUserEmail;
  try {
    if (isActive) {
      // Obtener el ID del usuario que se va a bloquear usando el email
      const response = await axios.get(`http://localhost:3001/user/all?email=${emailToBlock}`);
      const userToBlock = response.data;
      if (!userToBlock) {
        showSnackbar("Usuario no encontrado.");
        return;
      }

      // Realizar la solicitud PUT para bloquear al usuario usando el ID
      await axios.put(`http://localhost:3001/user`, { active: false, id: userToBlock._id});
      showSnackbar("Usuario Bloqueado");

      // Actualizar la lista de usuarios con el estado actualizado
      const updatedUserList = userList.map((user) =>
        user.email === emailToBlock ? { ...user, active: false } : user
      );
      setUserList(updatedUserList);
    }
  } catch (error) {
    showSnackbar("Error bloqueando Usuario");
  }
};

// const handleConfirmationToBlockUser = async (isActive) => {
//     setConfirmationOpen(false)
//     const emailToBlock = currentUserEmail; 
//   try {
    
//     if(isActive) {
//       await axios.put(`http://localhost:3001/user/?email=${emailToBlock}`, {active:false});
//       showSnackbar("Usuario Bloqueado");

//       const updatedUserList = userList.map((user) => user.email === emailToBlock ? {...user, active:false}: user);
//       console.log("Updated user list:", updatedUserList);

//       setUserList(updatedUserList); 
//     }
//   } catch (error) {
//     showSnackbar("Error bloqueando Usuario")
//   }
// }

// const handleConfirmationAction = async () => {
//   if (actionType === "block") {
//     await handleConfirmationToBlockUser();
//   } else if (actionType === "delete") {
//     await handleConfirmationConfirm();
//   }
// }




const showSnackbar = (message) => {
  setSnackbarMessage(message);
  setSnackbarOpen(true);
};

const handleSnackbarClose = () => {
  setSnackbarOpen(false);
};

const indexOfLastUser = currentPage * usersPerPage;
const indexOfFirstUser = indexOfLastUser - usersPerPage; 

const filteredUsers = userList.filter((user)=> 
user.email.toLowerCase().includes(searchTerm.toLowerCase()) || user._id.toLowerCase().includes(searchTerm.toLowerCase())
)

const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser); 

const renderUsers = () => {
  if (currentUsers.length === 0) {
    return (
      <TableRow>
        <TableCell colSpan={5}>No users found.</TableCell>
      </TableRow>
    );
  }

  return currentUsers.map((user, index) => {
    const { _id, name, lastName, email, phone } = user;

    const isEvenRow = index % 2 === 0;
    const rowBackground = isEvenRow ? "#E7DDC7" : "#F3F3F7";

    return (
      <TableRow key={index} style={{ backgroundColor: rowBackground}}>

        <TableCell>
          <Switch
            checked={user.active}
            onChange={() => handleToogle (index, email, user.active)}
            color="primary"
          />
        </TableCell>


        <TableCell>
          <Switch
            checked={true}
            onChange={() => handleToogle (index, email)}
            color="primary"
          />
        </TableCell>

        <TableCell style={{ color: "#111111", fontSize: "15px"}}>
          {_id}
        </TableCell>
       
        <TableCell style={{ color: "#111111", fontSize: "15px"}}>
          {name}
        </TableCell>

        <TableCell style={{ color: "#111111", fontSize: "15px" }}>
          {lastName}
        </TableCell>
        
        <TableCell style={{ color: "#111111", fontSize: "15px" }}>
          {email}
        </TableCell>
        <TableCell style={{ color: "#111111", fontSize: "15px" }}>
          {phone}
        </TableCell>

        {/* <TableCell style={{ color: "#111111", fontSize: "15px" }}>
            {Object.keys(posts).map((post) => (
              <div key={post}>
                <p style={{fontWeight:"bold"}}>{post}</p>
                <p>{posts[post]}</p>
              </div>
            ))}
          </TableCell> */}
      </TableRow>
    );
  });
};

const handlePageChange = (event, newPage) => {
  setCurrentPage(newPage);
};

const totalPages = Math.ceil(userList.length / usersPerPage);



return (
  <div style={{marginLeft:"200px", marginTop:"55px", backgroundColor:"#A29F83", border:"2px solid", borderColor:"grey", borderRadius:"5px"}}>
    <TextField
      id="standard-basic"
      variant="standard"
      label="Buscar por Email o ID"
      value={searchTerm}
      onChange={(event) => setSearchTerm(event.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Search />
          </InputAdornment>
        ),
      }}
      style={{ marginBottom: "4px", marginLeft: "65%", display: 'flex', justifyContent: 'center'}}
    />
    <Table>
      <TableHead style={{marginTop:"15px", backgroundColor:"#B2AE8C"}}>
        <TableRow>
        <TableCell style={{ color: "#000000", fontSize: "15px"}}>
            Bloquear Usuario
          </TableCell>
          <TableCell style={{ color: "#000000", fontSize: "15px"}}>
            Eliminar Usuario
          </TableCell>
          <TableCell style={{ color: "#000000", fontSize: "15px" }}>
            ID
          </TableCell>
          <TableCell style={{ color: "#000000", fontSize: "15px" }}>
            Nombre
          </TableCell>
          <TableCell style={{ color: "#000000", fontSize: "15px" }}>
            Apellido
          </TableCell>
          <TableCell style={{ color: "#000000", fontSize: "15px" }}>
            Email
          </TableCell>
          <TableCell style={{ color: "#000000", fontSize: "15px" }}>
            Celular
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody >{renderUsers()}</TableBody>
    </Table>

    <div>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
      />
    </div>


    <Dialog open={confirmationOpen} onClose={handleConfirmationClose}>
      <DialogTitle>Confirmación</DialogTitle>
      <DialogContent>
      {isActive ? "¿Seguro quieres bloquear el usuario?" : "¿Seguro quieres eliminar el usuario?"}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleConfirmationClose}>No</Button>
        <Button onClick={isActive ? handleConfirmationToBlockUser : handleConfirmationConfirm} autoFocus>
        {isActive ? "Si, bloquear" : "Si, eliminar"}
        </Button>
      </DialogActions>
    </Dialog>

    {/* <Dialog open={confirmationOpen} onClose={handleConfirmationClose}>
      <DialogTitle>Confirmación</DialogTitle>
      <DialogContent>
      ¿Seguro quieres eliminar el usuario?
      </DialogContent>
      <DialogActions>
        <Button onClick={handleConfirmationClose}>No</Button>
        <Button onClick={handleConfirmationConfirm} autoFocus>
        Si, Eliminar
        </Button>
      </DialogActions>
    </Dialog> */}

    <Snackbar
      open={snackbarOpen}
      autoHideDuration={3000}
      onClose={handleSnackbarClose}
      message={snackbarMessage}
    />
  </div>
);
};

export default UserPanel;
