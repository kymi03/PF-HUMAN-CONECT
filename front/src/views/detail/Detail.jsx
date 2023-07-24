import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBarAle from "../../components/NavBar/NavBar.ale";


function Detail() {
<<<<<<< HEAD
  return (
    <div className='font-bold'>Este es el componente detail</div>
  )
=======


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
>>>>>>> c8d36a6da10ea521c90efda4c22b1826f94698af
}

export default Detail;
