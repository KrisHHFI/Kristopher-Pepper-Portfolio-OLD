import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';
import Carousel from './Carousel';

const SplitLayout = ({ imageSources }) => {

  return (
    <div className="splitLayoutContainer">
      <div className="splitLayoutTile">
        <Carousel
          imageSources={imageSources}
          hasSplitLayout={true}
        />
      </div>
      <div className="splitLayoutTile">
        {/* Optionally add content here */}
      </div>
    </div>
  );
};

SplitLayout.propTypes = {
  imageSources: PropTypes.object.isRequired,
};

export default SplitLayout;
