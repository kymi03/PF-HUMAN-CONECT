import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBarAle from "../../components/NavBar/NavBar.ale";
import FooterMoreInfo from "../../components/footer/FooterMoreInfo";


function Detail() {


const [PAD, setPAD] = useState([]);
const { id } = useParams();

useEffect(() => {
  axios.get(`http://localhost:3001/projects?id=${id}`)
    .then(({ data }) => {
      if (data.name) {
        setPAD(data);
      } else {
        window.alert('No hay proyectos con ese ID');
      }
    });
  return setPAD({});
}, []);

// console.log(PAD)
return (
   
    

 

      <div >
        <NavBarAle></NavBarAle>
        <img src={PAD.media ? PAD.media.images[0].imageUrl : 'https://humanconet.org/wp-content/uploads/2022/09/Cover-Home-Human-Conet-01-1-1536x780.webp' }></img>
        <h1>{PAD.name}</h1>
        <p>{PAD.body}</p>
        <FooterMoreInfo></FooterMoreInfo>
      </div>

  );
}

export default Detail;
