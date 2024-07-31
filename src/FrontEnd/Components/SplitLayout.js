import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';
import Carousel from './Carousel';

const SplitLayout = ({ imageSources, noBulletPoints, text }) => {

  return (
    <div className="splitLayoutContainer">
      <div className="splitLayoutTile">
        <Carousel
          imageSources={imageSources}
          hasSplitLayout={true}
        />
      </div>
      <div className="splitLayoutTile splitLayoutTextTile">
        {text && (
          <ul className={noBulletPoints ? 'noBulletPoints' : ''}>
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
  noBulletPoints: PropTypes.bool, // Add noBulletPoints as a prop type
};

SplitLayout.defaultProps = {
  noBulletPoints: false, // Default to showing bullet points
};

export default SplitLayout;
