import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

const ImageCarousel = ({ imageSources, leftArrow, rightArrow }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = Object.values(imageSources);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carouselContainer">
      <img
        src={leftArrow}
        alt="Left Arrow"
        className="arrowImage leftArrowImage"
        onClick={handlePrev}
      />
      <img src={images[currentImageIndex]} alt="carousel" className="image" />
      <img
        src={rightArrow}
        alt="Right Arrow"
        className="arrowImage rightArrowImage"
        onClick={handleNext}
      />
    </div>
  );
};

ImageCarousel.propTypes = {
  imageSources: PropTypes.object.isRequired,
  leftArrow: PropTypes.string.isRequired,
  rightArrow: PropTypes.string.isRequired
};

export default ImageCarousel;