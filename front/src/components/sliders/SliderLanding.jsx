import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/human-template1.png";
import image2 from "../../assets/human-template2.png";
import image3 from "../../assets/human-template3.png";
import image4 from "../../assets/human-template4.png";
import image5 from "../../assets/human-template5.png";
import image6 from "../../assets/human-template6.png";
import image7 from "../../assets/human-template7.png";
// Importa más imágenes aca

const SliderLanding = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "80px", 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px", 
        },
      },
    ],
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-400">
      <Slider {...settings} className="w-3/4">
        <div className="w-full">
          <img
            src={image1}
            alt="Image 1"
            className="mx-auto object-contain h-80"
          />
        </div>
        <div className="w-full">
          <img
            src={image2}
            alt="Image 2"
            className="mx-auto object-contain h-80"
          />
        </div>
        <div className="w-full">
          <img
            src={image3}
            alt="Image 3"
            className="mx-auto object-contain h-80"
          />
        </div>
        <div className="w-full">
          <img
            src={image4}
            alt="Image 4"
            className="mx-auto object-contain h-80"
          />
        </div>
        <div className="w-full">
          <img
            src={image5}
            alt="Image 5"
            className="mx-auto object-contain h-80"
          />
        </div>
        <div className="w-full">
          <img
            src={image6}
            alt="Image 6"
            className="mx-auto object-contain h-80"
          />
        </div>
        <div className="w-full">
          <img
            src={image7}
            alt="Image 7"
            className="mx-auto object-contain h-80"
          />
        </div>
        {/* Agrega más imágenes aquí */}
      </Slider>
    </div>
  );
};

export default SliderLanding;