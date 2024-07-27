import React from 'react';
import './App.css';
import ImageCarousel from './FrontEnd/Components/ImageCarousel';
import { BWPortraitImageSources, ComponentImageSources } from './BackEnd/ImageSources';

function App() {
  return (
    <div className="App">
      <ImageCarousel
        imageSources={BWPortraitImageSources}
        leftArrow={ComponentImageSources.leftArrow}
        rightArrow={ComponentImageSources.rightArrow}
      />
    </div>
  );
}

export default App;
