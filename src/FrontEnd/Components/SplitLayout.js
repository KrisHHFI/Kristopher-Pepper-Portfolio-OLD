import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';
import Carousel from './Carousel';
import SocialIcons from './SocialIcons';
import socialIconsData from '../../Constants/SocialIconsData';

const SplitLayout = ({ hasIcons, imageSources, noBulletPoints, hideOnMobileView, text }) => {

  return (
    <div className="splitLayoutContainer">
      <div className={`splitLayoutTile ${hideOnMobileView ? 'hide-on-mobile' : ''}`}>
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
          <div className={hideOnMobileView ? 'hide-on-mobile' : ''}>
            <SocialIcons icons={socialIconsData} />
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
  hideOnMobileView: PropTypes.bool,
};

SplitLayout.defaultProps = {
  noBulletPoints: false,
  hasIcons: false,
  hideOnMobileView: false,
};

export default SplitLayout;
