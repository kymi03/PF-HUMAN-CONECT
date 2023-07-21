/*
===============
JavaScripFile+x: Projects.jsx
Objetivo:  renderizar cards que contiene card 
Autor: AlejoC137
Creation: 20 de julio 2023
===============
*/
import React from 'react';
import FooterMoreInfo from '../footer/FooterMoreInfo.jsx';
import Cards from '../cards/Cards.jsx';
import LeftInfo from '../leftInfo/LeftInfo.jsx';

function Projects() {

  const currentPAD = [
    {
      "projectId": 1,
      "name": "Anchicayá resiste",
      "author": "Juanito Perez",
      "media": {
        "images": [
          {
            "imageName": "perros",
            "imageUrl": "https://humanconet.org/wp-content/uploads/2022/05/PeI-Clean-01.webp"
          }
        ],
        "videos": [
          {
            "videoName": "Perros",
            "videoUrl": "https://youtu.be/58eFKSi_iiA"
          }
        ]
      },
      "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices nulla tempus dui interdum, id tempus tortor fringilla. Nullam id dui justo. Proin laoreet elit nec enim bibendum fringilla. Nunc non magna lorem. Cras id velit eget nibh finibus congue. Duis ut augue et turpis iaculis volutpat vitae aliquam massa. Donec aliquam tortor vel felis maximus, id condimentum enim finibus. In convallis ligula erat, non fringilla nisl tincidunt vel. Suspendisse at pulvinar felis, vitae pharetra est.",
    "breaf":"Este es el breaf del PAD, sirve para dar una idea general de que significa ",
    "location":"Colombia",
    "date":"some day"
  },
    {
      "projectId": 2,
      "name": "Anchicayá resiste",
      "author": "Juanito Perez",
      "media": {
        "images": [
          {
            "imageName": "perros",
            "imageUrl": "https://humanconet.org/wp-content/uploads/2022/05/PeI-Clean-01.webp"
          }
        ],
        "videos": [
          {
            "videoName": "Perros",
            "videoUrl": "https://youtu.be/58eFKSi_iiA"
          }
        ]
      },
      "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices nulla tempus dui interdum, id tempus tortor fringilla. Nullam id dui justo. Proin laoreet elit nec enim bibendum fringilla. Nunc non magna lorem. Cras id velit eget nibh finibus congue. Duis ut augue et turpis iaculis volutpat vitae aliquam massa. Donec aliquam tortor vel felis maximus, id condimentum enim finibus. In convallis ligula erat, non fringilla nisl tincidunt vel. Suspendisse at pulvinar felis, vitae pharetra est.",
          "breaf":"Este es el breaf del PAD, sirve para dar una idea general de que significa ",
          "location":"Colombia",
          "date":"some day"
    },
    {
      "projectId": 3,
      "name": "Anchicayá resiste",
      "author": "Juanito Perez",
      "media": {
        "images": [
          {
            "imageName": "perros",
            "imageUrl": "https://humanconet.org/wp-content/uploads/2022/05/PeI-Clean-01.webp"
          }
        ],
        "videos": [
          {
            "videoName": "Perros",
            "videoUrl": "https://youtu.be/58eFKSi_iiA"
          }
        ]
      },
      "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices nulla tempus dui interdum, id tempus tortor fringilla. Nullam id dui justo. Proin laoreet elit nec enim bibendum fringilla. Nunc non magna lorem. Cras id velit eget nibh finibus congue. Duis ut augue et turpis iaculis volutpat vitae aliquam massa. Donec aliquam tortor vel felis maximus, id condimentum enim finibus. In convallis ligula erat, non fringilla nisl tincidunt vel. Suspendisse at pulvinar felis, vitae pharetra est.",
          "breaf":"Este es el breaf del PAD, sirve para dar una idea general de que significa ",
          "location":"Colombia",
          "date":"some day"
    }
  ]
  
  
  console.log(currentPAD.length);

  return (
    <>
      <div className="w-500 h-500 bg-green-300 shadow flex space-x-5">
        <div className="w-500 h-500 bg-gray-300 shadow space-x-5">
          <LeftInfo />
        </div>
        <div className="w-1290 h-670 bg-blue-300 shadow space-x-5">
          <Cards currentPAD={currentPAD} />
        </div>
      </div>
      <FooterMoreInfo />
    </>
  );
}

export default Projects;
