// import styles from "./Detail.module.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBarAle from "../NavBar/NavBarAle";
import { PROJECTS, ARTICLES, DOCUMENTARYS } from "../../redux/actions-types";
import {

  Switch,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Snackbar,
} from "@mui/material";

import Footer from "../../components/footer/Footer"

function ContentDetail() {

  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [comments, setComments] = useState([]);

  const [content, setContent] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [editContent, setEditContent] = useState({});

  const [PAD, setPAD] = useState([]);

  const { id } = useParams();

  const navigate = useNavigate();

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
    const getComments = async (id) => {
      try {
        const response = await axios.get(
          `/comments?postReference=${id}`
        );
        setComments(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getComments(value);

    if (source !== "") {
      axios
        .get(`/${source}?id=${value}`)
        .then(({ data }) => {
          setPAD(data);
          setIsActive(data.active);
        })
        .catch((error) => {
          console.error(error);
          window.alert(`No hay ${source} con ese ID`);
        });
    }
  }, [id, source, value]);

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
      showSnackbar("Contenido eliminado de la base de datos");

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
    console.log("content:", editContent);

    try {
      const response = await axios.put(`/${source}`, {
        id: value,
        [content]: contentValue,
      });

      // console.log("Respuesta del servidor:", response.data);

      navigate(`/adminoptions`);
    } catch (error) {
      console.log("Error al realizar la actualizacion:", error);
    }
  };

  const handleUpdateActive = async (event) => {

    isActive === false ? setIsActive(true) : setIsActive(false);

    try {
      const response = await axios.put(`/${source}`, {
        id: value,

        active: !isActive 

      });

      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      console.log("Error al realizar la actualizacion:", error);
    }
    // console.log(`/${source}` ,       {
    //   "id": value ,
    //   "active": isActive
    //   }
    //   )
  };

  //  " sourcePAD
  // content
  // contentValue "

  const handleContent = (event) => {



    switch (event.target.value) {
      case "Nombre":
        setContent("name");

        break;
      case "Titulo":
        setContent("title");

        break;
      case "Bloque de texto 1":
        setContent("body");

        break;
      case "Bloque de texto 2":
        setContent("body2");

        break;
      case "Bloque de texto 3":
        setContent("body3");

        break;
      case "Resumen":
        setContent("breaf");

        break;
      case "Localización":
        setContent("location");

        break;
    
      default:
        break;
    }


    // console.log(event.target.value)
  };

  const handleContentValue = (event) => {
    // console.log(event.target.value)
    setContentValue(event.target.value);
  };

  // const editableDataList = Object.keys(PAD)
  const editableDataList = [
    "Selecciona..." ,
    "Nombre",
    "Titulo",
    "Bloque de texto 1",
    "Bloque de texto 2",
    "Bloque de texto 3",
    "Resumen",
    "Localización",
    // "name",
    // "title",
    // "body",
    // "body2",
    // "body3",
    // "breaf",
    // "location",
  ];

  const generateOptions = (options) => {
    return options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ));
  };

  const options = generateOptions(editableDataList);

  return (
    <div>
      <NavBarAle></NavBarAle>
      <div className=" justify-start ml-4 ">
        <div className=" border-2 mt-2 rounded-md border-gray-300 bg-white    w-3/12 p-5">
          <div className="flex border border-grey       bg-white rounded-md mb-1 p-0.5">
            <h2 className="  font-gilroy font-bold">ID: </h2>
            <h3 className="px-4  font-gilroy">{PAD._id}</h3>
          </div>
          <div className="flex border border-grey       bg-white rounded-md mb-1 p-0.5">
            <h2 className=" font-gilroy font-bold">Autor:</h2>
            <h3 className="px-4 font-gilroy">{PAD.author}</h3>
          </div>
          <div className="flex border border-grey       bg-white rounded-md mb-1 p-0.5">
            <h2 className=" font-gilroy font-bold">Nombre del contenido:</h2>
            <h3 className="px-4  font-gilroy">{PAD.name}</h3>
          </div>
          <div className="flex border border-grey       bg-white rounded-md mb-1 p-0.5">
            <h2 className=" font-gilroy font-bold">Titulo:</h2>
            <h3 className="px-4  font-gilroy">{PAD.title}</h3>
          </div>
          <div className="flex border border-grey       bg-white rounded-md mb-1 p-0.5">
            <h2 className=" font-gilroy font-bold">Fecha de creación:</h2>
            <h3 className="px-4  font-gilroy">{PAD.date}</h3>
          </div>
          <div className="flex border border-grey       bg-white rounded-md mb-1 p-0.5">
            <h2 className=" font-gilroy font-bold">Localización:</h2>
            <h3 className="px-4  font-gilroy">{PAD.location}</h3>
          </div>
          <div className="flex border border-grey       bg-white rounded-md mb-1 p-0.5">
            <h2 className=" font-gilroy font-bold">Comentarios:</h2>
            <h3 className="px-4  font-gilroy">{comments.length}</h3>
          </div>
          <div className="flex border border-grey       bg-white rounded-md mb-1 p-0.5">
            <h2 className=" font-gilroy font-bold">Cantidad de Imagenes:</h2>
            <h3 className="px-4  font-gilroy">{PAD.media?.images.length}</h3>
          </div>
          <div className="flex border border-grey       bg-white rounded-md p-0.5">
            <h2 className=" font-gilroy font-bold">Cantidad de Videos:</h2>
            <h3 className="px-4  font-gilroy">{PAD.media?.videos.length}</h3>
          </div>
        </div>

<div>
        <div className="flex flex-col mt-5">
          <select
            name="sort"
            onInput={handleContent}
            type="select"
            className="w-3/12 py-2.5 mb-2 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            {options}
          </select>
          <textarea
            name="breaf"
            placeholder="Escriba aqui para editar el contenido"
            onChange={handleContentValue}
            className=" resize-none w-3/12 h-40 mb-2 border-gray-300 rounded-md"
            type="text"
          />
          <button
            onClick={handleUpdateData}
            className=" bg-vividGreen mb-2 text-white w-3/12 font-gilroy font-medium text-lg py-1 px-2 rounded-lg hover:bg-green-600"
          >
            Actualizar campo
          </button>
        </div>
</div>
<div className="rounded-lg   w-3/12">
        <div className="flex justify-center bg-amber-400 mb-2 text-white w-12/12 font-gilroy font-medium text-lg py-1 px-2 rounded-lg 
pointer">
          <h3 className=" font-gilroy">Estado: {isActive === true ? "activo" : "inactivo"}</h3>
          <Switch
            checked={isActive}
            onChange={handleUpdateActive}
            color="primary"
          />
        </div>

        <div className="flex justify-center bg-amber-400 mb-2 text-white w-12/12 font-gilroy font-medium text-lg py-1 px-2 rounded-lg 
pointer">
          <h2 className=" font-gilroy">Eliminar:</h2>
          <button onClick={() => handleToogle()}>🗑</button>
        </div>
</div>

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
        <Footer/>
    </div>
  );
}

export default ContentDetail;