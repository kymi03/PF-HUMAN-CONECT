/*
===============
JavaScripFile+x: Projects.jsx
Objetivo:  renderizar cards que contiene card 
Autor: AlejoC137
Creation: 20 de julio 2023
===============
*/
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import FooterMoreInfo from '../footer/FooterMoreInfo.jsx';
import Cards from '../cards/Cards.jsx';
import LeftInfo from '../leftInfo/LeftInfo.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import { getAllProjects } from '../../redux/actions.js';
function Projects() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProjects());


  }, []);
  
  const currentPAD = useSelector(state => state.allProjects)
  // console.log('projects:' , currentPAD);

  // const currentPAD = [
  //   {
  //     "projectId": 1,
  //     "name": "Anchicayá resiste",
  //     "author": "Juanito Perez",
  //     "media": {
  //       "images": [
  //         {
  //           "imageName": "perros",
  //           "imageUrl": "https://humanconet.org/wp-content/uploads/2022/05/PeI-Clean-01.webp"
  //         }
  //       ],
  //       "videos": [
  //         {
  //           "videoName": "Perros",
  //           "videoUrl": "https://youtu.be/58eFKSi_iiA"
  //         }
  //       ]
  //     },
  //     "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices nulla tempus dui interdum, id tempus tortor fringilla. Nullam id dui justo. Proin laoreet elit nec enim bibendum fringilla. Nunc non magna lorem. Cras id velit eget nibh finibus congue. Duis ut augue et turpis iaculis volutpat vitae aliquam massa. Donec aliquam tortor vel felis maximus, id condimentum enim finibus. In convallis ligula erat, non fringilla nisl tincidunt vel. Suspendisse at pulvinar felis, vitae pharetra est.",
  //   "breaf":"Este es el breaf del PAD, sirve para dar una idea general de que significa ",
  //   "location":"Colombia",
  //   "date":"some day"
  // },
  //   {
  //     "projectId": 2,
  //     "name": "Anchicayá resiste",
  //     "author": "Juanito Perez",
  //     "media": {
  //       "images": [
  //         {
  //           "imageName": "perros",
  //           "imageUrl": "https://humanconet.org/wp-content/uploads/2022/05/PeI-Clean-01.webp"
  //         }
  //       ],
  //       "videos": [
  //         {
  //           "videoName": "Perros",
  //           "videoUrl": "https://youtu.be/58eFKSi_iiA"
  //         }
  //       ]
  //     },
  //     "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices nulla tempus dui interdum, id tempus tortor fringilla. Nullam id dui justo. Proin laoreet elit nec enim bibendum fringilla. Nunc non magna lorem. Cras id velit eget nibh finibus congue. Duis ut augue et turpis iaculis volutpat vitae aliquam massa. Donec aliquam tortor vel felis maximus, id condimentum enim finibus. In convallis ligula erat, non fringilla nisl tincidunt vel. Suspendisse at pulvinar felis, vitae pharetra est.",
  //         "breaf":"Este es el breaf del PAD, sirve para dar una idea general de que significa ",
  //         "location":"Colombia",
  //         "date":"some day"
  //   },
  //   {
  //     "projectId": 3,
  //     "name": "Anchicayá resiste",
  //     "author": "Juanito Perez",
  //     "media": {
  //       "images": [
  //         {
  //           "imageName": "perros",
  //           "imageUrl": "https://humanconet.org/wp-content/uploads/2022/05/PeI-Clean-01.webp"
  //         }
  //       ],
  //       "videos": [
  //         {
  //           "videoName": "Perros",
  //           "videoUrl": "https://youtu.be/58eFKSi_iiA"
  //         }
  //       ]
  //     },
  //     "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices nulla tempus dui interdum, id tempus tortor fringilla. Nullam id dui justo. Proin laoreet elit nec enim bibendum fringilla. Nunc non magna lorem. Cras id velit eget nibh finibus congue. Duis ut augue et turpis iaculis volutpat vitae aliquam massa. Donec aliquam tortor vel felis maximus, id condimentum enim finibus. In convallis ligula erat, non fringilla nisl tincidunt vel. Suspendisse at pulvinar felis, vitae pharetra est.",
  //         "breaf":"Este es el breaf del PAD, sirve para dar una idea general de que significa ",
  //         "location":"Colombia",
  //         "date":"some day"
  //   }
  // ]


  return (
    <>
      <div className="flex" >
      <NavBar/>
        <div >
          <LeftInfo />
        </div>
        <div >
          <Cards currentPAD={currentPAD} />
        </div>
        {/* <div className='h-500'>hi</div> */}
      </div>
      <FooterMoreInfo />
    </>
  );
}

export default Projects;
