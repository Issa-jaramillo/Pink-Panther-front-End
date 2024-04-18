import React, { useState } from 'react';
import './Carousel.css';
import imagen1 from '../Assets/carousel1.jpg'
import imagen2 from '../Assets/carousel2.jpg'
import imagen3 from '../Assets/carousel3.jpg'

const Carousel = () => {
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    imagen1,
    imagen2,
    imagen3,
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button" onClick={prevSlide}>Anterior</button>
      <img className="carousel-image" src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      <button className="carousel-button" onClick={nextSlide}>Siguiente</button>
    </div>
  );
};

export default Carousel;
