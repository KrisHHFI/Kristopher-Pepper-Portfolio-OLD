import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

const Navbar = ({ link1, link2, onLinkClick }) => {
  return (
    <div className="navBarContainer">
      <div className="navBarLinks">
        <div onClick={() => onLinkClick(link1)}>{link1}</div>
        <div onClick={() => onLinkClick(link2)}>{link2}</div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  link1: PropTypes.string.isRequired,
  link2: PropTypes.string.isRequired,
  onLinkClick: PropTypes.func.isRequired, // Add prop type for the onLinkClick function
};

export default Navbar;
