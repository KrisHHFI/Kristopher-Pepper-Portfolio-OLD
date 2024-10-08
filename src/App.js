import React, { useState } from 'react';
import './App.css';
import PageContent from './FrontEnd/Components/PageContent';
import Navbar from './FrontEnd/Components/Navbar';
import pages from './Constants/Pages';

function App() {
  const [activePage, setActivePage] = useState('BW Portraits');
  const {
    title,
    hasFullPageCarousel = false,
    hasSplitLayout = false,
    hasGitHubRepositories = false,
    hasIcons = false,
    noBulletPoints = false,
    imageSources,
    hideOnMobileView = false,
    text = []
  } = pages[activePage];

  return (
    <div className="App">
      <PageContent
        pageTitle={title}
        hasFullPageCarousel={hasFullPageCarousel}
        hasIcons={hasIcons}
        hasSplitLayout={hasSplitLayout}
        hasGitHubRepositories={hasGitHubRepositories}
        imageSources={imageSources}
        noBulletPoints={noBulletPoints}
        hideOnMobileView={hideOnMobileView}
        text={text}
      />
      <Navbar pages={pages} onLinkClick={setActivePage} activePage={activePage} hideOnMobileView={true} />
    </div>
  );
}

export default App;
