import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBarAle from "../../components/NavBar/NavBar.ale";


function Detail() {


const [PAD, setPAD] = useState([]);
const { name } = useParams();

useEffect(() => {
  axios.get(`http://localhost:3001/get/projects/${name}`)
    .then(({ data }) => {
      if (data.name) {
        setPAD(data);
      } else {
        window.alert('No hay proyectos con ese ID');
      }
    });
  return setPAD({});
}, [name]);

// console.log(PAD)
return (
   
    

 

      <div >
        <NavBarAle></NavBarAle>
        <h1>{PAD.name}</h1>
        <p>{PAD.body}</p>
      </div>

  );
}

export default Detail;
