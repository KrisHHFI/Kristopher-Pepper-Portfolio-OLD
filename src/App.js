// App.js
import React, { useState } from 'react';
import './App.css';
import PageContent from './FrontEnd/Components/PageContent';
import Navbar from './FrontEnd/Components/Navbar';
import pages from './Constants/Pages';

function App() {
  const [activePage, setActivePage] = useState('BW Portraits');
  const { title, hasFullPageCarousel = false, hasSplitLayout = false, imageSources } = pages[activePage];

  return (
    <div className="App">
      <Navbar pages={pages} onLinkClick={setActivePage} />
      <PageContent
        pageTitle={title}
        hasFullPageCarousel={hasFullPageCarousel}
        hasSplitLayout={hasSplitLayout}
        imageSources={imageSources}
      />
    </div>
  );
}

export default App;
