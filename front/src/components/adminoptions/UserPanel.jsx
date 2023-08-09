import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
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
  IconButton,
} from "@mui/material";
import { TextField, InputAdornment } from "@mui/material";
import { Search, Delete } from "@mui/icons-material";

function UserPanel(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  const [userList, setUserList] = useState([]);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [confirmationBlockUserOpen, setConfirmationBlockUserOpen] = useState(false);
  const [selectedUserIndex, setSelectedUserIndex] = useState(null);
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isActive, setIsActive] = useState(true);


  useEffect(() => {
    const usersData = async () => {
      try {
        const response = await axios.get("/user/all");
        const users = response.data;
        setUserList(users); // Actualizar el estado userList con los datos obtenidos
        const initialIsActive = users.some((user) => user.active);
        setIsActive(initialIsActive);
      } catch (error) {
        // Manejo de errores (opcional)
        console.error("Error al obtener los usuarios:", error);
      }
    };

    usersData();
  }, []);

  const handleToogle = (index, email) => {
    setSelectedUserIndex(index);
    setCurrentUserEmail(email);
    setConfirmationOpen(true);
  };

  const handleToogleBlockUser = (index, email) => {
    setSelectedUserIndex(index);
    setCurrentUserEmail(email);
    setConfirmationBlockUserOpen(true);
  };

  const handleConfirmationClose = () => {
    setConfirmationOpen(false);
  };

  const handleConfirmationCloseBlockUser = (isActive) => {
    const blockUser = isActive
      ? setConfirmationBlockUserOpen(false)
      : setConfirmationBlockUserOpen(true);
    console.log(blockUser);
    return blockUser;
  };

  const handleConfirmationConfirm = async () => {
    setConfirmationOpen(false);
    const emailToDelete = currentUserEmail;

    try {
      // Eliminación del usuario en la base de datos
      await axios.delete(`/user/?email=${emailToDelete}`);
      showSnackbar("Usuario eliminado de la base de datos");
      // Actualización de la lista de usuarios
      const updatedUserList = userList.filter(
        (user) => user.email !== emailToDelete
      );
      setUserList(updatedUserList);
    } catch (error) {
      console.error("Error deleting user:", error);
      showSnackbar("Error deleting user");
    }
  };

  const handleConfirmationToBlockUser = async () => {
    setConfirmationBlockUserOpen(false);
    const emailToBlock = currentUserEmail;

    try {
      const response = await axios.get(
        `/user/all?email=${emailToBlock}`
      );
      const user = response.data;
      user.active ? setIsActive(false) : setIsActive(true);
      console.log(user.active);

      const updateUserState = await axios.put(`/user`, {
        id: user._id,
        active: !user.active,
        email: user.email,
        name: user.name,
      });
      const updatedUserList = userList.map((user) =>
        user.email === emailToBlock ? { ...user, active: !user.active } : user
      );
      setUserList(updatedUserList);
      setIsActive(!user.active);
      console.log(updateUserState);
    } catch (error) {
      console.log(error);
    }
  };

  const showSnackbar = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  const filteredUsers = userList.filter(
    (user) =>
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user._id.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        <TableRow key={index} style={{ backgroundColor: rowBackground }}>
          <TableCell>
            <Switch
              checked={user.active}
              onChange={() => handleToogleBlockUser(index, email, user.active)}
              color="primary"
            />
          </TableCell>

          <TableCell>
            <IconButton
              onClick={() => handleToogle(index, email)}
            >
              <Delete/>
            </IconButton>
          </TableCell>

          <TableCell style={{ color: "#111111", fontSize: "15px" }}>
            {_id}
          </TableCell>

          <TableCell style={{ color: "#111111", fontSize: "15px" }}>
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
        </TableRow>
      );
    });
  };

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(userList.length / usersPerPage);

  return (
    <div
      style={{
        marginLeft: "200px",
        marginTop: "55px",
        backgroundColor: "#A29F83",
        border: "2px solid",
        borderColor: "grey",
        borderRadius: "5px",
      }}
    >
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
        style={{
          marginBottom: "4px",
          marginLeft: "65%",
          display: "flex",
          justifyContent: "center",
        }}
      />
      <Table>
        <TableHead style={{ marginTop: "15px", backgroundColor: "#B2AE8C" }}>
          <TableRow>
            <TableCell style={{ color: "#000000", fontSize: "15px" }}>
              Bloquear Usuario
            </TableCell>
            <TableCell style={{ color: "#000000", fontSize: "15px" }}>
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
        <TableBody>{renderUsers()}</TableBody>
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
        <DialogContent>¿Seguro quieres eliminar el usuario?</DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmationClose}>No</Button>
          <Button onClick={handleConfirmationConfirm} autoFocus>
            Si, Eliminar
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={confirmationBlockUserOpen}
        onClose={handleConfirmationCloseBlockUser}
      >
        <DialogTitle>Confirmación</DialogTitle>
        <DialogContent>
          {isActive
            ? "¿Seguro quieres bloquear el usuario?"
            : "¿Seguro quieres desbloquear el usuario?"}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmationCloseBlockUser}>No</Button>
          <Button onClick={handleConfirmationToBlockUser} autoFocus>
            {isActive ? "Si, bloquear" : "Si, desbloquear"}
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
  );
}

export default UserPanel;
