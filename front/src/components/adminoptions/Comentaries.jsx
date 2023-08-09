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

function AdminComentaries(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  const [comentariesList, setComentariesList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [selectedUserIndex, setSelectedUserIndex] = useState(null);
  const [currentComentarieId, setCurrentUserId] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    const comentariesData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/comments");
        const comentaries = response.data;
        setComentariesList(comentaries); // Actualizar el estado userList con los datos obtenidos
      } catch (error) {
        // Manejo de errores (opcional)
        console.error("Error al obtener los comentarios:", error);
      }
    };

    comentariesData();
  }, []);

  const handleToogle = (index, id) => {
    setSelectedUserIndex(index);
    setCurrentUserId(id);
    setConfirmationOpen(true);
  };

  const handleConfirmationClose = () => {
    setConfirmationOpen(false);
  };

  const handleConfirmationConfirm = async () => {
    setConfirmationOpen(false);
    const commentId = currentComentarieId;

    try {
      // Eliminación del comentario en la base de datos
      await axios.delete(`http://localhost:3001/comments/?id=${commentId}`);
      showSnackbar("Comentario eliminado exitosamente de la base de datos");
      //Actualización de la lista de usuarios
      const updatedComentariesList = comentariesList.filter(
        (comentarie) => comentarie._id !== commentId
      );
      setComentariesList(updatedComentariesList);
    } catch (error) {
      console.error("Error deleting comentarie:", error);
      showSnackbar("Error deleting comentarie");
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

  const filteredComentaries = comentariesList.filter((comentarie) =>
    comentarie.author
      .toLowerCase()
      .includes(
        searchTerm.toLowerCase()) ||
         comentarie.reference.toLowerCase().includes(searchTerm.toLowerCase())
      
  );

  const currentComentaries = filteredComentaries.slice(
    indexOfFirstUser,
    indexOfLastUser
  );

  const renderComentaries = () => {
    if (currentComentaries.length === 0) {
      return (
        <TableRow>
          <TableCell colSpan={5}>No comentarie found.</TableCell>
        </TableRow>
      );
    }

    return currentComentaries.map((comentarie, index) => {
      const { _id, author, body } = comentarie;

      const isEvenRow = index % 2 === 0;
      const rowBackground = isEvenRow ? "#E7DDC7" : "#F3F3F7";

      return (
        <TableRow key={index} style={{ backgroundColor: rowBackground }}>
          <TableCell>
            <IconButton onClick={() => handleToogle(index, _id)}>
              <Delete />
            </IconButton>
          </TableCell>

          <TableCell style={{ color: "#111111", fontSize: "15px" }}>
            {_id}
          </TableCell>

          <TableCell style={{ color: "#111111", fontSize: "15px" }}>
            {author}
          </TableCell>

          <TableCell style={{ color: "#111111", fontSize: "15px" }}>
            {body}
          </TableCell>
        </TableRow>
      );
    });
  };

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(comentariesList.length / usersPerPage);

  return (
    <div
      style={{
        marginLeft: "200px",
        marginTop: "40px",
        marginBottom: "250px",
        backgroundColor: "#A29F83",
        border: "2px solid",
        borderColor: "grey",
        borderRadius: "5px",
      }}
    >
      <TextField
        id="standard-basic"
        variant="standard"
        label="Buscar por id de comentario o autor"
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
              Eliminar Comentario
            </TableCell>

            <TableCell style={{ color: "#000000", fontSize: "15px" }}>
              ID Comentario
            </TableCell>

            <TableCell style={{ color: "#000000", fontSize: "15px" }}>
              Autor
            </TableCell>

            <TableCell style={{ color: "#000000", fontSize: "15px" }}>
              Comentario
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderComentaries()}</TableBody>
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
        <DialogContent>¿Seguro quieres eliminar el comentario?</DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmationClose}>No</Button>
          <Button onClick={handleConfirmationConfirm} autoFocus>
            Si, Eliminar
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

export default AdminComentaries;
