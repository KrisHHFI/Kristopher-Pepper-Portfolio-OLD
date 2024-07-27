import React, { useState } from 'react';
import './App.css';
import Carousel from './FrontEnd/Components/Carousel';
import Navbar from './FrontEnd/Components/Navbar';
import { BWPortraitImageSources, ComponentImageSources, ColourPortraitSources } from './BackEnd/ImageSources';

function App() {
  const [activePage, setActivePage] = useState('BW Portraits');

  const pages = {
    'BW Portraits': {
      title: 'BW Portraits',
      imageSources: BWPortraitImageSources,
    },
    'Colour Portraits': {
      title: 'Colour Portraits',
      imageSources: ColourPortraitSources,
    },
  };

  const { title, imageSources } = pages[activePage];

  return (
    <div className="App">
      <Navbar
        link1="BW Portraits"
        link2="Colour Portraits"
        onLinkClick={setActivePage}
      />
      <Carousel
        carouselTitleText={title}
        imageSources={imageSources}
        leftArrow={ComponentImageSources.leftArrow}
        rightArrow={ComponentImageSources.rightArrow}
      />
    </div>
  );
}

export default App;