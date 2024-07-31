import React, { useState } from 'react';
import './App.css';
import PageContent from './FrontEnd/Components/PageContent';
import Navbar from './FrontEnd/Components/Navbar';
import pages from './Constants/Pages';

function App() {
  const [activePage, setActivePage] = useState('BW Portraits');
  const { title, hasFullPageCarousel = false, hasSplitLayout = false, hasGitHubRepositories = false, noBulletPoints = false, imageSources, text = [] } = pages[activePage];

  return (
    <div className="App">
      <Navbar pages={pages} onLinkClick={setActivePage} activePage={activePage} />
      <PageContent
        pageTitle={title}
        hasFullPageCarousel={hasFullPageCarousel}
        hasSplitLayout={hasSplitLayout}
        hasGitHubRepositories={hasGitHubRepositories}
        imageSources={imageSources}
        noBulletPoints={noBulletPoints}
        text={text}
      />
    </div>
  );
}

export default App;
