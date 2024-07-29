// FrontEnd/Components/Navbar.js
import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

const Navbar = ({ pages, onLinkClick }) => {
  const sections = {};

  // Group pages by sections
  Object.keys(pages).forEach((page) => {
    const section = pages[page].section;
    if (!sections[section]) {
      sections[section] = [];
    }
    sections[section].push(pages[page]);
  });

  return (
    <div className="navBarContainer">
      <div className="navBarH1">Kristopher Pepper</div>
      {Object.keys(sections).map((section) => (
        <div className="navBarSection" key={section}>
          <div className="navBarH2">{section}</div>
          <div className="navBarLinks">
            {sections[section].map((page) => (
              <div key={page.title} onClick={() => onLinkClick(page.title)}>
                {page.title}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

Navbar.propTypes = {
  pages: PropTypes.object.isRequired,
  onLinkClick: PropTypes.func.isRequired,
};

export default Navbar;
