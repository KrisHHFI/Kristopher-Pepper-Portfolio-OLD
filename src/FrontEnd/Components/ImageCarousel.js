import React, { useState } from 'react';
import { BWPortraitImageSources, ComponentImageSources } from '../../BackEnd/ImageSources';
import '../../App.css'; 

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const bwImages = Object.values(BWPortraitImageSources);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bwImages.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + bwImages.length) % bwImages.length);
  };

  return (
    <div className="carouselContainer">
      <img
        src={ComponentImageSources.leftArrow}
        alt="Left Arrow"
        className="arrowImage leftArrowImage"
        onClick={handlePrev}
      />
      <img src={bwImages[currentImageIndex]} alt="carousel" className="image" />
      <img
        src={ComponentImageSources.rightArrow}
        alt="Right Arrow"
        className="arrowImage rightArrowImage"
        onClick={handleNext}
      />
    </div>
  );
};

export default ImageCarousel;
