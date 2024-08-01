import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

const SocialIcons = ({ icons }) => {
  return (
    <div className="socialIconsContainer">
      {icons.map((icon, index) => (
        <a key={index} href={icon.href} target="_blank" rel="noopener noreferrer">
          <img
            src={icon.src}
            alt={icon.alt}
            className="socialIcon"
          />
        </a>
      ))}
    </div>
  );
};

SocialIcons.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  })).isRequired,
};

export default SocialIcons;
