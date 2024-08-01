import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';
import { ComponentImageSources } from '../../BackEnd/ImageSources';

const Navbar = ({ pages, onLinkClick, activePage }) => {
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
    <div className="navbarWrapper">
      <div className="navBarHamBurger">
        <div className="navBarHamBurgerText">M<br />e<br />n<br />u</div>
      </div>
      <div className="navbar">
        <div className="navBarH1">Kristopher Pepper</div>
        {Object.keys(sections).map((section) => (
          <div className="navBarSection" key={section}>
            <div className="navBarH2">{section}</div>
            <div className="navBarLinks">
              {sections[section].map((page) => (
                <div
                  key={page.title}
                  onClick={() => onLinkClick(page.title)}
                  className={activePage === page.title ? 'activeNavLink' : ''}
                >
                  {page.title}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="navBarSection">
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
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  pages: PropTypes.object.isRequired,
  onLinkClick: PropTypes.func.isRequired,
  activePage: PropTypes.string.isRequired,
};

export default Navbar;
