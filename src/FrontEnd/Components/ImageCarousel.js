import React from 'react';
import { BWPortraitImageSources, ComponentImageSources } from '../../BackEnd/ImageSources';
import '../../App.css'; 

const ImageCarousel = () => {
  return (
    <div className="carouselContainer">
      <img
        src={ComponentImageSources.leftArrow}
        alt="Left Arrow"
        className="arrowImage leftArrowImage"
      />
      <img src={BWPortraitImageSources.bw1} alt="carousel" className="image" />
      <img
        src={ComponentImageSources.rightArrow}
        alt="Right Arrow"
        className="arrowImage rightArrowImage"
      />
    </div>
  );
};

export default ImageCarousel;
