import React from 'react';
import bw1 from '../Assets/Images/BW1.jpg'

const ImageCarousel = () => {

  return (
    <div style={styles.carouselContainer}>
      <img src={bw1} alt="carousel" style={styles.image} />
    </div>
  );
};

const styles = {
  carouselContainer: {
    width: '100%',
    height: '400px',
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
