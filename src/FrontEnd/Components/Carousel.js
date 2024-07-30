import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../App.css';
import { ComponentImageSources } from '../../BackEnd/ImageSources';

const Carousel = ({ imageSources, hasSplitLayout }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = Object.values(imageSources);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div
      className={`carouselContainer ${hasSplitLayout ? 'carouselSplitLayout' : ''}`}
    >
      <img
        src={ComponentImageSources.leftArrow}
        alt="Left Arrow"
        className="arrowImage carouselLeftArrowImage"
        onClick={handlePrev}
      />
      <img src={images[currentImageIndex]} alt="carousel" className="carouselImage" />
      <img
        src={ComponentImageSources.rightArrow}
        alt="Right Arrow"
        className="arrowImage carouselRightArrowImage"
        onClick={handleNext}
      />
    </div>
  );
};

Carousel.propTypes = {
  imageSources: PropTypes.object.isRequired,
  hasSplitLayout: PropTypes.bool
};

Carousel.defaultProps = {
  hasSplitLayout: false
};

export default Carousel;
