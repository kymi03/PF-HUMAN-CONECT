import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import yukpa from '../../assets/SliderImages/YukpaSlider.png'
import yurumangui from '../../assets/SliderImages/YurumanguiResiste.png'
import anchicaya from '../../assets/SliderImages/Anchicaya.png'
import aliwa from '../../assets/SliderImages/Aliwa.png'

const SliderHome = () => {
  const settings = {
    dots: true, 
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      <div className="w-full h-screen md:h-80 lg:h-96 xl:h-96">
        <img
          src={anchicaya}
          alt="Imagen 1"
          className="w-full h-auto object-fit rounded-2xl"
        />
      </div>
      <div>
        <img
          src={yukpa}
          alt="Imagen 2"
          className="w-full h-auto object-fit rounded-2xl"
        />
      </div>
      <div>
        <img
          src={yurumangui}
          alt="Imagen 3"
          className="w-full h-auto object-fit rounded-2xl"
        />
      </div>
      <div>
        <img
          src={aliwa}
          alt="Imagen 4"
          className="w-full h-auto object-fit rounded-2xl"
        />
      </div>
      {/* <div>
        <img
          src="https://www.dzoom.org.es/wp-content/uploads/2019/09/paisajes-expresivos-734x489.jpg"
          alt="Imagen 5"
          className="w-full h-auto object-fit rounded-2xl"
        />
      </div> */}
      {/* <div>
        <img
          src="https://humanconet.org/wp-content/uploads/2023/04/DSC_0209-min-2048x1365.jpg.webp"
          alt="Imagen 6"
          className="w-full h-auto object-fit rounded-2xl"
        />
      </div> */}
      {/* <div>
        <img
          src="https://humanconet.org/wp-content/uploads/2023/04/MegaBassines-2-1.png.webp"
          alt="Imagen 7"
          className="w-full h-auto object-fit rounded-2xl"
        />
      </div> */}
      {/* Agrega más imágenes aquí */}
    </Slider>
  );
};

export default SliderHome;







