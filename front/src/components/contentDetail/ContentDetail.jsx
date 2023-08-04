// import styles from "./Detail.module.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBarAle from "../NavBar/NavBarAle";
import FooterMoreInfo from "../footer/FooterMoreInfo";
import { PROJECTS, ARTICLES, DOCUMENTARYS } from "../../redux/actions-types";
import green1 from "../../assets/icons/green1.png";
import green2 from "../../assets/icons/green2.png";
import { useDispatch, useSelector } from "react-redux";
import { setDonationItems } from "../../redux/actions";
import CommentForm from "../comments/CommentForm";
import CommentDisplay from "../comments/CommentDisplay";

function ContentDetail() {
  const [PAD, setPAD] = useState([]);
  const [uniqueImages, setUniqueImages] = useState([]);
  const [uniqueVideos, setUniqueVideos] = useState([]);
  const [comments, setComments] = useState([]);
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
    // Actualizar las imágenes únicas
    if (PAD.media && PAD.media.images) {
      const uniqueImageUrls = [];
      for (let i = 0; i < PAD.media.images.length; i++) {
        const img = PAD.media.images[i];
        if (!uniqueImageUrls.includes(img.imageUrl)) {
          uniqueImageUrls.push(img.imageUrl);
        }
      }
      setUniqueImages(uniqueImageUrls);
    }
  }, [PAD.media]);

  useEffect(() => {
    if (PAD.media && PAD.media.videos) {
      const uniqueVideoUrls = [];
      const renderedVideos = new Set();
      PAD.media.videos.forEach((video) => {
        if (!renderedVideos.has(video.videoUrl)) {
          renderedVideos.add(video.videoUrl);
          uniqueVideoUrls.push(video.videoUrl);
        }
      });
      setUniqueVideos(uniqueVideoUrls);
    }
  }, [PAD.media]);

  //Boton de donacion
  const dispatch = useDispatch();
  const Items = useSelector((state) => state.ItemsDonation);
  const [green, setGreen] = useState(green1);
  useEffect(() => {
    const resultArray = Items.map((item) => item.split("=")[1]);
    if (resultArray.includes(key, value)) {
      setGreen(green2);
    } else {
      setGreen(green1);
    }
  }, [Items]);
  const handleCartButton = (event) => {
    const value = event.target.getAttribute("data-value");
    dispatch(setDonationItems([value]));
  };

  // comentarios de usuarios
  const handleCommentSubmit = (newComment) => {
    setComments([...comments, newComment]);
  };
  const handleDeleteComment = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };

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
        <h3>Cantidad de Imagenes: {PAD.media.images.length}</h3>
        <h3>Cantidad de Video{PAD.media.videos.length}</h3>

        <h2>Configurar:</h2>
        <h3>editar campo: </h3>
        <h3>Estado: {PAD.active === true ?  "activo" : false }</h3>
        <h3>🗑</h3>

    
   
      </div>
      <FooterMoreInfo />
    </div>
  );
}

export default ContentDetail;
