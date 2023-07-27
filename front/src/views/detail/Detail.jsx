// import styles from "./Detail.module.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBarAle from "../../components/NavBar/NavBar.ale";
import FooterMoreInfo from "../../components/footer/FooterMoreInfo";
import { PROJECTS, ARTICLES, DOCUMENTARYS } from "../../redux/actions-types";

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
          if (data.name) {
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

  return (
    <div>
      <NavBarAle></NavBarAle>
      <div className={styles["header-section"]}>
        <h1>{PAD.name}</h1>
        <img
          src={
            uniqueImages.length > 0
              ? uniqueImages[0]
              : "https://humanconet.org/wp-content/uploads/2022/09/Cover-Home-Human-Conet-01-1-1536x780.webp"
          }
          alt="Cover Image"
        />
        {/* Muestra todas las imágenes */}
        {uniqueImages.length > 1 ? (
          uniqueImages.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              className={styles["header-section"]}
            />
          ))
        ) : uniqueImages.length === 1 ? (
          <img src={uniqueImages[0]} className={styles["header-section"]} />
        ) : null}
      </div>
      {/* Texto */}
      <div className={styles["content-section"]}>
        <p>{PAD.body}</p>
        {/* Muestra todos los videos */}
        {uniqueVideos.map((videoUrl, index) => (
          <div key={index} className={styles["video-responsive"]}>
            <div className={styles["video-container"]}>
              {videoUrl.includes("youtube") ? (
                <iframe
                  className={styles["video-container-iframe"]}
                  src={`https://www.youtube.com/embed/${
                    videoUrl.split("v=")[1]
                  }`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : videoUrl.includes("vimeo") ? (
                <iframe
                  className={styles["video-container-iframe"]}
                  src={`https://player.vimeo.com/video/${
                    videoUrl.split("/")[3]
                  }`}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : null}
            </div>
          </div>
        ))}
      </div>
      <FooterMoreInfo></FooterMoreInfo>
    </div>
  );
}

export default Detail;
