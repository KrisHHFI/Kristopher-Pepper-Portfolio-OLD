// FrontEnd/Components/SplitLayout.js
import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';
import Carousel from './Carousel';
import SocialIcons from './SocialIcons';
import socialIconsData from '../../Constants/SocialIconsData';

const SplitLayout = ({ hasIcons, imageSources, noBulletPoints, text }) => {

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
          <ul className={noBulletPoints ? 'noBulletPoints' : ''}>
            {text.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        {hasIcons && (
          <SocialIcons icons={socialIconsData} />
        )}
      </div>
    </div>
  );
};

SplitLayout.propTypes = {
  imageSources: PropTypes.object.isRequired,
  text: PropTypes.arrayOf(PropTypes.string),
  noBulletPoints: PropTypes.bool,
  hasIcons: PropTypes.bool,
};

SplitLayout.defaultProps = {
  noBulletPoints: false,
  hasIcons: false,
};

export default SplitLayout;
