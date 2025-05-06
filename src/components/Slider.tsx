import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + ' custom-arrow next-arrow'}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="rgba(0,0,0,0.5)"/>
        <path d="M16 12L24 20L16 28" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + ' custom-arrow prev-arrow'}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="rgba(0,0,0,0.5)"/>
        <path d="M24 12L16 20L24 28" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
};

const slides = [
  {
    id: 1,
    title: 'Welcome to Datchik Electronics',
    description: 'We provide end to end technical solution, consulting and Integration services',
    image: 'https://img.freepik.com/free-vector/gradient-technology-background_23-2148884155.jpg',
  },
  {
    id: 2,
    title: 'Innovative IoT Solutions',
    description: 'Empowering your business with smart, connected devices and seamless integration.',
    image: 'https://img.freepik.com/free-vector/technology-background-with-circuit-board-design_1017-19366.jpg',
  },
  {
    id: 3,
    title: 'Expert Consulting',
    description: 'Our experts help you design, implement, and scale your technology projects.',
    image: 'https://img.freepik.com/free-vector/abstract-technology-particle-background_52683-25766.jpg',
  },
];

const ImageSlider: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: false,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <div
              className="slide-background"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-content custom-slide-content">
                <h2 className="slide-title">{slide.title}</h2>
                <p className="slide-desc">{slide.description}</p>
                <div className="slide-buttons">
                  <button className="slide-btn outline">Know More</button>
                  <button className="slide-btn filled">Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider; 