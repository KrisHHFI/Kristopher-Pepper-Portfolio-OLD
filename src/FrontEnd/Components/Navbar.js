import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

const Navbar = ({ pages, onLinkClick }) => {
  return (
    <div className="navBarContainer">
      <div className="navBarH1">Kristopher Pepper</div>
      <div className="navBarSection">
        <div className="navBarH2">Photography</div>
        <div className="navBarLinks">
          {Object.keys(pages).map((page) => (
            <div key={page} onClick={() => onLinkClick(page)}>
              {pages[page].title}
            </div>
          ))}
        </div>
      </div>
      <div className="navBarSection">
        <div className="navBarH2">Coding</div>
        <div>Tic Tac Farm</div>
        <div>React Weather App</div>
        <div>Other projects</div>
      </div>
      <div className="navBarSection">
        <div className="navBarH2">About</div>
        <div>Me</div>
        <div>Contact</div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  pages: PropTypes.object.isRequired,
  onLinkClick: PropTypes.func.isRequired,
};

export default Navbar;