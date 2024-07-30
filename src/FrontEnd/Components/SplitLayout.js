import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';
import Carousel from './Carousel';

const SplitLayout = ({ imageSources, text }) => {

  return (
    <div className="splitLayoutContainer">
      <div className="splitLayoutTile">
        <Carousel
          imageSources={imageSources}
          hasSplitLayout={true}
        />
      </div>
      <div className="splitLayoutTile">
        {text && (
          <ul>
            {text.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

SplitLayout.propTypes = {
  imageSources: PropTypes.object.isRequired,
  text: PropTypes.arrayOf(PropTypes.string), // Make text an optional prop
};

export default SplitLayout;
