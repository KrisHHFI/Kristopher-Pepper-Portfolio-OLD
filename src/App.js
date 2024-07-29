// App.js
import React, { useState } from 'react';
import './App.css';
import PageContent from './FrontEnd/Components/PageContent';
import Navbar from './FrontEnd/Components/Navbar';
import { BandImageSources, BWPortraitImageSources, ColourPortraitSources } from './BackEnd/ImageSources';

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
      hasSplitLayout: true,
      imageSources: BandImageSources,
      section: 'Coding',
    },
    'React Weather App': {
      title: 'React Weather App',
      hasSplitLayout: true,
      imageSources: BandImageSources,
      section: 'Coding',
    },
    'Other Projects': {
      title: 'Other Projects',
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

  const { title, hasCarousel = false, hasSplitLayout = false, imageSources } = pages[activePage];

  return (
    <div className="App">
      <Navbar pages={pages} onLinkClick={setActivePage} />
      <PageContent
        pageTitle={title}
        hasCarousel={hasCarousel}
        hasSplitLayout={hasSplitLayout}
        imageSources={imageSources}
      />
    </div>
  );
}

export default App;
