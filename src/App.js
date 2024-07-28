import React, { useState } from 'react';
import './App.css';
import Carousel from './FrontEnd/Components/Carousel';
import Navbar from './FrontEnd/Components/Navbar';
import { BandImageSources, BWPortraitImageSources, ComponentImageSources, ColourPortraitSources } from './BackEnd/ImageSources';

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
    'Bands': {
      title: 'Bands',
      imageSources: BandImageSources,
    },
  };

  const { title, imageSources } = pages[activePage];

  return (
    <div className="App">
      <Navbar
        pages={pages}
        onLinkClick={setActivePage}
      />
      <Carousel
        pageTitle={title}
        imageSources={imageSources}
        leftArrow={ComponentImageSources.leftArrow}
        rightArrow={ComponentImageSources.rightArrow}
      />
    </div>
  );
}

export default App;