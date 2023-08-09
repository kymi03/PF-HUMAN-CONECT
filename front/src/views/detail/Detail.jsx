import styles from "./Detail.module.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBarAle from "../../components/NavBar/NavBarAle";
import FooterMoreInfo from "../../components/footer/FooterMoreInfo";
import { PROJECTS, ARTICLES, DOCUMENTARYS } from "../../redux/actions-types";
import green1 from "../../assets/icons/green1.png";
import green2 from "../../assets/icons/green2.png";
import { useDispatch, useSelector } from "react-redux";
import { setDonationItems } from "../../redux/actions";
import CommentForm from "../../components/comments/CommentForm";
import CommentDisplay from "../../components/comments/CommentDisplay";

function Detail() {
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
          // console.log(data);
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
      <div className={styles["header-section"]}>
        {/* Lado izquierdo: encabezado */}
        <h1 className={styles["encabezado"]}>{PAD.title}</h1>
        {/* Lado derecho: Imagen principal */}
        {uniqueImages.length > 0 && (
          <img
            className={styles["imagen-principal"]}
            src={
              uniqueImages.length > 1
                ? uniqueImages[0]
                : "https://humanconet.org/wp-content/uploads/2022/09/Cover-Home-Human-Conet-01-1-1536x780.webp"
            }
            alt="Cover Image"
          />
        )}
      </div>

      {/* Boton donacion */}
      <div className={styles["boton-section"]}>
        <button onClick={handleCartButton} id="imageButton">
          <img
            data-value={[id]}
            className="h-8 "
            src={green}
            alt="Add to Cart"
          />
        </button>
      </div>

      {/* Texto Body y se muestra la 2 imagen */}
      <div className={styles["content-section"]}>
        {/* Columna izquierda (texto) */}
        <div className={styles["content-section-left"]}>
          <p>{PAD.body}</p>
        </div>
        {/* Columna derecha (imágenes adicionales) */}
        <div className={styles["content-section-right"]}>
          {/* Nivel 3: Imágenes adicionales */}
          {uniqueImages.length > 1 && (
            <div className={styles["image-container"]}>
              {/* Mostrar solo la segunda imagen */}
              <img
                src={uniqueImages[1]} // Segunda imagen (índice 1)
                className={styles["additional-image2"]}
                alt={`Additional Image 2`} // Se establece el nombre como "Additional Image 2" para la segunda imagen
              />
            </div>
          )}
        </div>
      </div>

      {/* Texto Body2 y se muestra la 3 imagen */}
      <div className={styles["content-section2"]}>
        {/* Columna izquierda (texto) */}
        <div className={styles["content-section-left"]}>
          <p>{PAD.body2}</p>
        </div>
        {/* Columna derecha (imágenes adicionales) */}
        <div className={styles["content-section-right"]}>
          {/* Nivel 3: Imágenes adicionales */}
          {uniqueImages.length > 2 && (
            <div className={styles["image-container"]}>
              {/* Mostrar solo la tercera imagen */}
              <img
                src={uniqueImages[2]} // Tercera imagen (índice 2)
                className={styles["additional-image3"]}
                alt={`Additional Image 3`} // Se establece el nombre como "Additional Image 3" para la tercera imagen
              />
            </div>
          )}
        </div>
      </div>

      {/* Muestra el primer video */}
      <div className={styles["video-container1"]}></div>
      {uniqueVideos[0] ? (
        <div className={styles["video-responsive"]}>
          {/* Renderiza el video utilizando <iframe> */}
          {uniqueVideos[0]?.includes("youtube") ? (
            <iframe
              className={styles["video-container-iframe"]}
              src={`https://www.youtube.com/embed/${
                uniqueVideos[0]?.split("v=")[1]
              }`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : uniqueVideos[0]?.includes("vimeo") ? (
            <iframe
              className={styles["video-container-iframe"]}
              src={`https://player.vimeo.com/video/${
                uniqueVideos[0]?.split("/")[3]
              }`}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <video
              className={styles["video-container-iframe"]}
              src={uniqueVideos[0]}
              controls
            ></video>
          )}
          {/* {console.log(uniqueVideos[0], "video")}; */}
        </div>
      ) : null}

      {/* Body3 */}
      <div className={styles["content-body3"]}>
        <p>{PAD.body3}</p>
      </div>

      {/* Muestra el segundo video */}
      <div className={styles["video-container2"]}></div>
      {uniqueVideos[1] ? (
        <div className={styles["video-responsive"]}>
          {/* Renderiza el video utilizando <iframe> */}
          {uniqueVideos[1]?.includes("youtube") ? (
            <iframe
              className={styles["video-container-iframe"]}
              src={`https://www.youtube.com/embed/${
                uniqueVideos[1]?.split("v=")[1]
              }`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : uniqueVideos[1]?.includes("vimeo") ? (
            <iframe
              className={styles["video-container-iframe"]}
              src={`https://player.vimeo.com/video/${
                uniqueVideos[1]?.split("/")[3]
              }`}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <video
              className={styles["video-container-iframe"]}
              src={uniqueVideos[0]}
              controls
            ></video>
          )}
          {/* {console.log(uniqueVideos[0], "video")}; */}
        </div>
      ) : null}

      {/* Comentarios de usuarios */}
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-semibold text-center mb-6">Comentarios</h1>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="w-full md:w-1/3">
            <CommentForm onCommentSubmit={handleCommentSubmit} PAD={PAD} />
          </div>
          <div className="w-full md:w-2/3 mt-4 md:mt-0 overflow-hidden whitespace-normal">
            <CommentDisplay
              comments={comments}
              onDeleteComment={handleDeleteComment}
              PAD={PAD}
            />
          </div>
        </div>
      </div>
      <FooterMoreInfo />
    </div>
  );
}

export default Detail;
