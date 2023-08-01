import styles from "./Detail.module.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBarAle from "../../components/NavBar/NavBar.ale";
import FooterMoreInfo from "../../components/footer/FooterMoreInfo";
import { PROJECTS, ARTICLES, DOCUMENTARYS } from "../../redux/actions-types";
import green1 from "../../assets/icons/green1.png";
import green2 from "../../assets/icons/green2.png";
import { useDispatch, useSelector } from "react-redux";
import { setDonationItems } from "../../redux/actions";

function Detail() {
  const [PAD, setPAD] = useState([]);
  const [uniqueImages, setUniqueImages] = useState([]);
  const { id } = useParams();
  const { images = [], videos = [] } = PAD.media || {};

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
          if (data.name && data.title) {
            setPAD(data);
          } else {
            window.alert(`No hay ${source} con ese ID`);
          }
        })
        .catch((error) => console.error(error));
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

  let uniqueVideos = [...new Set(videos.map((video) => video.videoUrl))];

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

  return (
    <div>
      <NavBarAle></NavBarAle>
      <div className={styles["header-section"]}>
        {/* Lado izquierdo: Título */}
        <h1 className={styles["custom-title"]}>{PAD.title}</h1>
        {/* Lado derecho: Imagen unica */}
        {uniqueImages.length > 0 && (
          <img
            className={styles["custom-image"]}
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

      {/* Texto Body*/}
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
              {uniqueImages.slice(1).map((imageUrl, index) => (
                <img
                  key={index}
                  src={imageUrl}
                  className={styles["additional-image"]}
                  alt={`Additional Image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Muestra todos los videos */}
      {uniqueVideos.map((videoUrl, index) => (
        <div key={index} className={styles["video-responsive"]}>
          {/* Renderiza los videos utilizando <iframe> */}
          {videoUrl?.includes("youtube") ? (
            <iframe
              className={styles["video-container-iframe"]}
              src={`https://www.youtube.com/embed/${videoUrl?.split("v=")[1]}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : videoUrl?.includes("vimeo") ? (
            <iframe
              className={styles["video-container-iframe"]}
              src={`https://player.vimeo.com/video/${videoUrl?.split("/")[3]}`}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : null}
        </div>
      ))}
      <FooterMoreInfo />
    </div>
  );
}

export default Detail;
