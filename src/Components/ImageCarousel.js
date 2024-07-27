import React from 'react';
import { BWPortraitImageSources } from '../BackEnd/ImageSources';

const ImageCarousel = () => {

  return (
    <div style={styles.carouselContainer}>
      <img src={BWPortraitImageSources.bw1} alt="carousel" style={styles.image} />
    </div>
  );
};

const styles = {
  carouselContainer: {
    width: '100%',
    height: '90vh ',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative'
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%'
  }
};

export default ImageCarousel;
