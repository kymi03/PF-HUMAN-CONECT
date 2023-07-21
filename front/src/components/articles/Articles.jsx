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
import NavBar from '../NavBar/NavBar.jsx';
function Articles() {

  const currentPAD = [
    {
      "articleId": 1,
  
      "name": "Guerra del Agua.",
  
      "author": "Juanito Perez",
  
      "media": {
        "images": [
          {
            "imageName": "Foto de persona sonriendo",
            "imageUrl": "https://humanconet.org/wp-content/uploads/2023/04/Black-Blocks-1.png.webp"
          },
          {
            "imageName": "Foto de persona sonriendo 2",
            "imageUrl": "https://humanconet.org/wp-content/uploads/2023/04/Black-Blocks-1.png.webp"
          }
        ],
  
        "videos": [
          {
            "videoName": "niños jugando",
            "videoUrl": "https://humanconet.org/wp-content/uploads/2023/04/Black-Blocks-1.png.webp"
          }
        ]
      },
  
      "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices nulla tempus dui interdum, id tempus tortor fringilla. Nullam id dui justo. Proin laoreet elit nec enim bibendum fringilla. Nunc non magna lorem. Cras id velit eget nibh finibus congue. Duis ut augue et turpis iaculis volutpat vitae aliquam massa. Donec aliquam tortor vel felis maximus, id condimentum enim finibus. In convallis ligula erat, non fringilla nisl tincidunt vel. Suspendisse at pulvinar felis, vitae pharetra est. Proin dapibus sodales vehicula. Aliquam auctor dolor id erat ultrices aliquet. Proin sed rutrum erat. Nullam dignissim eros id metus ornare finibus. Sed accumsan velit nec elit consectetur eleifend. Sed condimentum risus ante. Pellentesque feugiat neque eget posuere consequat. Nunc tincidunt posuere eros, porta ultricies nunc feugiat vel. Nunc eget pellentesque libero. Vestibulum interdum massa nec ante viverra, ac fermentum dui aliquam. Duis imperdiet sed neque vel fermentum. Etiam tempus vehicula efficitur.",
      "breaf":" breaf articles ",
      "location":"America",
      "date":"a day"
    },
    {
      "articleId": 2,
  
      "name": "Guerra del Agua.",
  
      "author": "Juanito Perez",
  
      "media": {
        "images": [
          {
            "imageName": "Foto de persona sonriendo",
            "imageUrl": "https://humanconet.org/wp-content/uploads/2023/04/Black-Blocks-1.png.webp"
          },
          {
            "imageName": "Foto de persona sonriendo 2",
            "imageUrl": "https://humanconet.org/wp-content/uploads/2023/04/Black-Blocks-1.png.webp"
          }
        ],
  
        "videos": [
          {
            "videoName": "niños jugando",
            "videoUrl": "https://humanconet.org/wp-content/uploads/2023/04/Black-Blocks-1.png.webp"
          }
        ]
      },
  
      "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices nulla tempus dui interdum, id tempus tortor fringilla. Nullam id dui justo. Proin laoreet elit nec enim bibendum fringilla. Nunc non magna lorem. Cras id velit eget nibh finibus congue. Duis ut augue et turpis iaculis volutpat vitae aliquam massa. Donec aliquam tortor vel felis maximus, id condimentum enim finibus. In convallis ligula erat, non fringilla nisl tincidunt vel. Suspendisse at pulvinar felis, vitae pharetra est. Proin dapibus sodales vehicula. Aliquam auctor dolor id erat ultrices aliquet. Proin sed rutrum erat. Nullam dignissim eros id metus ornare finibus. Sed accumsan velit nec elit consectetur eleifend. Sed condimentum risus ante. Pellentesque feugiat neque eget posuere consequat. Nunc tincidunt posuere eros, porta ultricies nunc feugiat vel. Nunc eget pellentesque libero. Vestibulum interdum massa nec ante viverra, ac fermentum dui aliquam. Duis imperdiet sed neque vel fermentum. Etiam tempus vehicula efficitur.",
      "breaf":" breaf articles ",
      "location":"America",
      "date":"a day"
    },
    {
      "articleId": 3,
  
      "name": "Guerra del Agua.",
  
      "author": "Juanito Perez",
  
      "media": {
        "images": [
          {
            "imageName": "Foto de persona sonriendo",
            "imageUrl": "https://humanconet.org/wp-content/uploads/2023/04/Black-Blocks-1.png.webp"
          },
          {
            "imageName": "Foto de persona sonriendo 2",
            "imageUrl": "https://humanconet.org/wp-content/uploads/2023/04/Black-Blocks-1.png.webp"
          }
        ],
  
        "videos": [
          {
            "videoName": "niños jugando",
            "videoUrl": "https://humanconet.org/wp-content/uploads/2023/04/Black-Blocks-1.png.webp"
          }
        ]
      },
  
      "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices nulla tempus dui interdum, id tempus tortor fringilla. Nullam id dui justo. Proin laoreet elit nec enim bibendum fringilla. Nunc non magna lorem. Cras id velit eget nibh finibus congue. Duis ut augue et turpis iaculis volutpat vitae aliquam massa. Donec aliquam tortor vel felis maximus, id condimentum enim finibus. In convallis ligula erat, non fringilla nisl tincidunt vel. Suspendisse at pulvinar felis, vitae pharetra est. Proin dapibus sodales vehicula. Aliquam auctor dolor id erat ultrices aliquet. Proin sed rutrum erat. Nullam dignissim eros id metus ornare finibus. Sed accumsan velit nec elit consectetur eleifend. Sed condimentum risus ante. Pellentesque feugiat neque eget posuere consequat. Nunc tincidunt posuere eros, porta ultricies nunc feugiat vel. Nunc eget pellentesque libero. Vestibulum interdum massa nec ante viverra, ac fermentum dui aliquam. Duis imperdiet sed neque vel fermentum. Etiam tempus vehicula efficitur.",
      "breaf":" breaf articles ",
      "location":"America",
      "date":"a day"
    }
  ]
  
  
  console.log(currentPAD.length);

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

export default Articles;
