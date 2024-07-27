import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

const Carousel = ({ pageTitle, imageSources, leftArrow, rightArrow }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = Object.values(imageSources);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div className="carouselContainer">
        <img
          src={leftArrow}
          alt="Left Arrow"
          className="arrowImage carouselLeftArrowImage"
          onClick={handlePrev}
        />
        <img src={images[currentImageIndex]} alt="carousel" className="carouselImage" />
        <img
          src={rightArrow}
          alt="Right Arrow"
          className="arrowImage carouselRightArrowImage"
          onClick={handleNext}
        />
      </div>
      <div className="carouselTitle">
        {pageTitle}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  imageSources: PropTypes.object.isRequired,
  leftArrow: PropTypes.string.isRequired,
  rightArrow: PropTypes.string.isRequired
};

export default Carousel;