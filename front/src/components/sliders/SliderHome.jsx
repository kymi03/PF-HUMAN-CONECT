import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importa tus imágenes aquí
import image1 from "../../assets/human-template1.png";
import image2 from "../../assets/human-template2.png";
import image3 from "../../assets/human-template3.png";
import image4 from "../../assets/human-template4.png";
import image5 from "../../assets/human-template5.png";
import image6 from "../../assets/human-template6.png";
import image7 from "../../assets/human-template7.png";

const SlidersHome = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    arrows: false,
  };

  return (
    <div className="h-screen flex items-center justify-end">
      <div className="w-3/4 h-full flex-grow">
        <Slider {...settings} className="w-full h-full">
          <div>
            <img src={image1} alt="Image 1" className="mx-auto object-contain h-96" />
          </div>
          <div>
            <img src={image2} alt="Image 2" className="mx-auto object-contain h-96" />
          </div>
          <div>
            <img src={image3} alt="Image 3" className="mx-auto object-contain h-96" />
          </div>
          <div>
            <img src={image4} alt="Image 4" className="mx-auto object-contain h-96" />
          </div>
          <div>
            <img src={image5} alt="Image 5" className="mx-auto object-contain h-96" />
          </div>
          <div>
            <img src={image6} alt="Image 6" className="mx-auto object-contain h-96" />
          </div>
          <div>
            <img src={image7} alt="Image 7" className="mx-auto object-contain h-96" />
          </div>
          {/* Agrega más imágenes aquí */}
        </Slider>
      </div>
    </div>
  );
};

export default SlidersHome;







