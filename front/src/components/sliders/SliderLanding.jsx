import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderLanding = () => {
    const [sliderRef, setSliderRef] = useState(null);

  useEffect(() => {
    sliderRef && sliderRef.slickPlay();
    return () => sliderRef && sliderRef.slickPause();
  }, [sliderRef])

  const sliderSettings ={
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slideToScroll: 1,
    swipe: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "25%",

  };
  const handleHover = () => {
    sliderRef.slickNext();
  }
  return (
    <div className={StyleSheet.sliderContainer}>
      <Slider {...sliderSettings} ref={(slider) => setSliderRef(slider)}>
          <div onMouseEnter={handleHover}>
            <img src="/assets/images/human-template1.png" alt="Imagen 1" className={StyleSheet.sliderImage} />
          </div>
          <div onMouseEnter={handleHover}>
            <img src="/assets/images/human-template2.png" alt="Imagen 2" className={StyleSheet.sliderImage} />
          </div>
          <div onMouseEnter={handleHover}>
            <img src="/assets/images/human-template3.png" alt="Imagen 2" className={StyleSheet.sliderImage} />
          </div>
          <div onMouseEnter={handleHover}>
            <img src="/assets/images/human-template4.png" alt="Imagen 2" className={StyleSheet.sliderImage} />
          </div>
          <div onMouseEnter={handleHover}>
            <img src="/assets/images/human-template5.png" alt="Imagen 2" className={StyleSheet.sliderImage} />
          </div>
          <div onMouseEnter={handleHover}>
            <img src="/assets/images/human-template6.png" alt="Imagen 2" className={StyleSheet.sliderImage} />
          </div>
          <div onMouseEnter={handleHover}>
            <img src="/assets/images/human-template7.png" alt="Imagen 2" className={StyleSheet.sliderImage} />
          </div>
      </Slider>

    </div>
  )
}

export default SliderLanding;