// App.js
import React, { useState } from 'react';
import './App.css';
import PageContent from './FrontEnd/Components/PageContent';
import Navbar from './FrontEnd/Components/Navbar';
import { BandImageSources, BWPortraitImageSources, ComponentImageSources, ColourPortraitSources } from './BackEnd/ImageSources';

function App() {
  const [activePage, setActivePage] = useState('BW Portraits');

  const pages = {
    'BW Portraits': {
      title: 'BW Portraits',
      hasCarousel: true,
      imageSources: BWPortraitImageSources,
      section: 'Photography',
    },
    'Colour Portraits': {
      title: 'Colour Portraits',
      hasCarousel: true,
      imageSources: ColourPortraitSources,
      section: 'Photography',
    },
    'Bands': {
      title: 'Bands',
      hasCarousel: true,
      imageSources: BandImageSources,
      section: 'Photography',
    },
    'Tic Tac Farm': {
      title: 'Tic Tac Farm',
      imageSources: BandImageSources,
      section: 'Coding',
    },
    'React Weather App': {
      title: 'React Weather App',
      imageSources: BandImageSources,
      section: 'Coding',
    },
    'Me': {
      title: 'Me',
      imageSources: BandImageSources,
      section: 'About',
    },
    'Contact': {
      title: 'Contact',
      imageSources: BandImageSources,
      section: 'About',
    },
  };

  const { title, hasCarousel = false, imageSources } = pages[activePage];

  return (
    <div className="App">
      <Navbar pages={pages} onLinkClick={setActivePage} />
      <PageContent pageTitle={title} hasCarousel={hasCarousel} imageSources={imageSources} />
    </div>
  );
}

export default App;
