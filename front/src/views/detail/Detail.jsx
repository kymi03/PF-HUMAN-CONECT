import styles from "./detail.module.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBarAle from "../../components/NavBar/NavBar.ale";
import FooterMoreInfo from "../../components/footer/FooterMoreInfo";
import { PROJECTS , ARTICLES , DOCUMENTARYS } from "../../redux/actions-types";
function Detail() {
  
  
//       <<<<<<<<=============== AlejoC137 
  const [PAD, setPAD] = useState([]);
  const { id } = useParams();
  const { images = [], videos = [] } = PAD.media || {};

  function splitString(inputString) {
    const [key, value] = inputString.split("=");
    return { key, value };
  }
  
  const { key, value } = splitString(id);
let source = ''
  switch (key) {
    case PROJECTS:
      source = 'projects'
      break;
    case ARTICLES:
      source = 'articles'
      break;
    case DOCUMENTARYS:
      source = 'documentaries'
      break;
  
    default:
      break;
  }
console.log(`http://localhost:3001/${source}?id=${value}`);
  useEffect(() => {
    axios.get(`http://localhost:3001/${source}?id=${value}`).then(({ data }) => {
      if (data.name) {
        setPAD(data);
      } else {
        window.alert("No hay proyectos con ese ID");
      }
    });
    return setPAD({});
  }, []);
//       <<<<<<<<=============== AlejoC137 



  // console.log(PAD)
  return (
    <div>
      <NavBarAle></NavBarAle>
      <div className={styles["header-section"]}>
        <h1>{PAD.name}</h1>
        <img
          src={
            images.length > 0
              ? images[0].imageUrl
              : "https://humanconet.org/wp-content/uploads/2022/09/Cover-Home-Human-Conet-01-1-1536x780.webp"
          }
        />
      </div>
      <div className={styles["content-section"]}>
        <p>{PAD.body}</p>
        {/* Muestra todas las imágenes */}
        {PAD.additionalImages &&
          PAD.additionalImages.map((img, index) => (
            <img
              key={index}
              src={img.imageUrl}
              alt={`Additional Image ${index + 1}`}
              className={styles["content-section"]}
            />
          ))}
        {/* Muestra todos los videos */}
        {videos.map((video, index) => (
          <div key={index} className={styles["video-responsive"]}>
            <div className={styles["video-container"]}>
              {" "}
              {/* Solo video-container aquí */}
              {video.videoUrl.includes("youtube") ? (
                <iframe
                  className={styles["video-container-iframe"]} // Aplica la clase al iframe aquí
                  src={`https://www.youtube.com/embed/${
                    video.videoUrl.split("v=")[1]
                  }`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : video.videoUrl.includes("vimeo") ? (
                <iframe
                  className={styles["video-container-iframe"]} // Aplica la clase al iframe aquí
                  src={`https://player.vimeo.com/video/${
                    video.videoUrl.split("/")[3]
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
