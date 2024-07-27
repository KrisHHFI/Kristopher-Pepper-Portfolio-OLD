import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

const CarouselTitle = ({ carouselTitleText }) => {
  return (
    <div className="carouselTitle">
      {carouselTitleText}
    </div>
  );
};

CarouselTitle.propTypes = {
  carouselTitleText: PropTypes.string.isRequired
};

export default CarouselTitle;
