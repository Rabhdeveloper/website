import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';
// Import images
import img2 from './Image/hav.webp';
import img3 from './Image/abb.webp';
import img4 from './Image/5.webp';
import img5 from './Image/6.webp';
import img6 from './Image/7.webp';
import img7 from './Image/10.jpeg';

// Slider data array
const sliderData = [
  { img: img2 },
  { img: img3 },
  { img: img4 },
  { img: img5 },
  { img: img6 },
  { img: img7 },
];

const AutoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3, // Show 3 slides at once
    slidesToScroll: 1,
    arrows: true, // Add arrows for manual navigation
    appendDots: dots => <ul className="slider-dots">{dots}</ul>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h1>Our Distributor</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {sliderData.map((slide, index) => (
            <div key={index} className="slide">
              <img src={slide.img} alt={`Slide ${index + 1}`} aria-label={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AutoSlider;