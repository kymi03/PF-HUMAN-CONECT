import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          src="https://humanconet.org/wp-content/uploads/2022/09/Cover-Home-Human-Conet-01-1-scaled.webp"
          alt="Imagen 1"
          className="w-full h-auto rounded-2xl"
        />
      </div>
      <div>
        <img
          src="https://humanconet.org/wp-content/uploads/2022/05/Aliwa-Take-Action-1-01.webp"
          alt="Imagen 2"
          className="w-full h-auto rounded-2xl"
        />
      </div>
      <div>
        <img
          src=""
          alt="Imagen 3"
          className="w-full h-auto rounded-2xl"
        />
      </div>
      <div>
        <img
          src="https://humanconet.org/wp-content/uploads/2022/05/Aliwa-Take-Action-3-01.webp"
          alt="Imagen 4"
          className="w-full h-auto rounded-2xl"
        />
      </div>
      <div>
        <img
          src="https://www.dzoom.org.es/wp-content/uploads/2019/09/paisajes-expresivos-734x489.jpg"
          alt="Imagen 5"
          className="w-full h-auto rounded-2xl"
        />
      </div>
      <div>
        <img
          src="https://concepto.de/wp-content/uploads/2015/03/paisaje-e1549600034372.jpg"
          alt="Imagen 6"
          className="w-full h-auto rounded-2xl"
        />
      </div>
      <div>
        <img
          src="https://concepto.de/wp-content/uploads/2015/03/paisaje-e1549600034372.jpg"
          alt="Imagen 7"
          className="w-full h-auto rounded-2xl"
        />
      </div>
      {/* Agrega más imágenes aquí */}
    </Slider>
  );
};

export default SliderHome;







