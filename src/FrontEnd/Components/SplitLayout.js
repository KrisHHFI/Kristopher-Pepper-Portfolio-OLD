import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';
import Carousel from './Carousel';
import { ComponentImageSources } from '../../BackEnd/ImageSources';

const SplitLayout = ({ hasIcons, imageSources, noBulletPoints, text }) => {
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
        {hasIcons && (
          <div className="navBarIconContainer">
            <a href="https://github.com/KrisHHFI" target="_blank" rel="noopener noreferrer">
              <img
                src={ComponentImageSources.GitHub}
                alt="GitHub Icon"
                className="navBarIcon"
              />
            </a>
            <a href="https://www.linkedin.com/in/kristopher-pepper-824184136/" target="_blank" rel="noopener noreferrer">
              <img
                src={ComponentImageSources.LinkedIn}
                alt="LinkedIn Icon"
                className="navBarIcon"
              />
            </a>
          </div>
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
